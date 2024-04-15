import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "../$types";
import { deleteUserSession, redirectToLogin } from "$lib/utilities/session";

export const actions: Actions = {
  logout: ({ cookies }) => {
    deleteUserSession(cookies)
    redirectToLogin()
  },
};
