import { get } from '$lib/ApiCaller'
import { get as getStoreVal } from 'svelte/store';
import { page } from '$app/stores';
import { redirect, type Cookies } from "@sveltejs/kit";
import { urlForImageName } from "./images";

const USER_SESSION_COOKIE_NAME = 'user_session'

export interface User {
  dbeUUID: string;
  username: string;
  email: string;
  photo: string;
}

export function getCurrentUser(pageStore: object): User {
  // pass in the deferenced page store ($page)
  if (!pageStore) {
    // for callers who are coming from .ts/.js files
    pageStore = getStoreVal(page)
  }
  return pageStore.data.user
}

export function createSession(cookies: Cookies) {
  const sessionID = crypto.randomUUID();
  cookies.set("session", JSON.stringify({ sessionID }), {
    path: "/",
    expires: new Date("2024-12-31"),
    sameSite: "lax",
    httpOnly: true,
  });
}

export function deleteUserSession(cookies: Cookies) {
  cookies.delete(USER_SESSION_COOKIE_NAME, { path: '/' })
}


export function createUserSession(cookies: Cookies, sessionID: string) {
  cookies.set(USER_SESSION_COOKIE_NAME, sessionID, {
    path: '/',
    maxAge: 60 * 60 * 24 * 14, // 14 days
    sameSite: 'strict',
    secure: true,
    // secure: process.env.NODE_ENV === 'production',
    httpOnly: true
  });
}


export async function userFromSession(cookies: Cookies) {

  const sessionID = cookies.get(USER_SESSION_COOKIE_NAME)
  if (!sessionID) {
    return null
  }

  try {
    const user = await get(`/users/validate-user/${sessionID}`) // user without password, or null (flask has revoked this session)
    return user
  } catch (error) {
    console.error('not valid user', error)
    return null
  }
}

export function urlForAvatar(user: UserSession) {
  return urlForImageName(user.photo)
}

export function redirectToLogin() {
  throw redirect(303, '/login')
}