export const load = async function load({ cookies, locals }) {

  return {
    user: locals.user
  }
};