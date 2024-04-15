import { PUBLIC_BACKEND_API_URL } from "$env/static/public";
import { createUserSession } from "$lib/utilities/session";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

// async function getUser(email: string, password: string) {
//   const endpoint = `${PUBLIC_BACKEND_API_URL}/users?email=${email}`;
//   console.log(`Fetching user from endpoint ${endpoint}`);

//   const response = await fetch(endpoint, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   });
//   const user = await response.json();
//   try {
//     return user[0];
//   } catch (error) {
//     console.log("User not found");
//     return false;
//   }
// }

async function getUser(form: FormData) {
  const endpoint = `${PUBLIC_BACKEND_API_URL}/users/login-user/`;

  const response = await fetch(endpoint, {
    method: 'POST',
    body: form
  })
  const user = await response.json();
  try {
    return user;
  } catch (error) {
    console.log('User not found')
    return false
  }
}


export const actions: Actions = {
  login: async ({ cookies, request }) => {
    const form = await request.formData();
    console.log(`[+page.server.ts]: Login initiated
    
    
    
    `)
    let userData = await getUser(form);

    if (!userData.validEmail) {
      console.log('Email not valid')
      return fail(400, {
        message: "Email not found in database"
      });
    }
    if (!userData.validPassword) {
      console.log('Password not valid')
      return fail(400, {
        message: "Invalid password"
      });
    }

    createUserSession(cookies, userData.sessionID);
    throw redirect(303, '/');
  },
};

export const load: PageServerLoad = async function load({ locals }) {
  if (locals.user) {
    throw redirect(303, '/')
  }

  return {};
};