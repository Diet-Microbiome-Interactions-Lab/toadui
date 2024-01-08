import { createSession } from "$lib/utilities/session";
import { getUserSession } from "./lib/ApiCaller";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  try {
    let session = event.cookies.get("session");
    let sessionObj = JSON.parse(session);
    event.locals.user = await getUserSession(sessionObj.email);
    event.locals.loggedIn = true;
  } catch (error) {
    event.locals.user = null;
  }
  const response = await resolve(event);
  response.headers.set("x-custom-header", "TOADplay");
  return response;
}
