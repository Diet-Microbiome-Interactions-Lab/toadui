// import { createSession } from "$lib/utilities/session";
// import { getUserSession } from "./lib/ApiCaller";

// /** @type {import('@sveltejs/kit').Handle} */
// export async function handle({ event, resolve }) {
//   try {
//     let session = event.cookies.get("session");
//     let sessionObj = JSON.parse(session);
//     event.locals.user = await getUserSession(sessionObj.email);
//     event.locals.loggedIn = true;
//   } catch (error) {
//     event.locals.user = null;
//   }
//   const response = await resolve(event);
//   response.headers.set("x-custom-header", "TOADplay");
//   return response;
// }
import { redirectToLogin, userFromSession } from '$lib/utilities/session';

import type { Cookies, Handle } from '@sveltejs/kit';


export const handle: Handle = async ({ event, resolve }) => {
    if (event.url.pathname.startsWith('/logout')) {
        // dont need to check user session on flask service if we are doing a logout
        return await resolve(event)
    }
    console.log(`[hooks.server.ts]: Calling user setting...
    
    `)
    const user = await userFromSession(event.cookies)
    console.log(`user = ${JSON.stringify(user)}
    
    
    
    `)

    if (!user) {
        if (event.url.pathname.startsWith('/login')) {
            return await resolve(event)
        }
        redirectToLogin()
    }

    // add user info to page data
    user.loggedIn = true;
    event.locals.user = user;
    console.log(`Event: ${JSON.stringify(event)};
    
    
    
    `)
    return await resolve(event)
}