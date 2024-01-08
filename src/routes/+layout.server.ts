import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoadEvent } from "./$types";

export const load = async function load({ cookies, locals }) {
  const session = cookies.get("session");
  // console.log(`[+layout.server.ts]: getting session ${session}`)
  if (!session) {
    // console.log(`[+layout.server.ts]: no session found`)
    return {
      sessionData: {},
      localData: {},
    };
  } else {
    let sessionData = JSON.parse(session);
    if (sessionData.email) {
      return {
        sessionData: session,
        localData: locals,
      };
    } else {
      return {
        sessionData: session,
        localData: {},
      };
    }
  }
};
