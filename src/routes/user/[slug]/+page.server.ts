import { redirect } from '@sveltejs/kit'

export const load = ({ locals, params }) => {
    return {
        slug: params.slug
    }
}