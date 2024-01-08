import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "../$types";

export const actions: Actions = {
  logout: ({ cookies, local }) => {
    const session = cookies.get("session");
    if (session) {
      cookies.delete("session", { path: "/" });
    }
    throw redirect(303, "/");
  },
};
