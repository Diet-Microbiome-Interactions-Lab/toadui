import { PUBLIC_BACKEND_API_URL } from '$env/static/public';

export function urlForImageName(name: string): string {
    return `${PUBLIC_BACKEND_API_URL}/notebook/img/${name}`
}


export const acceptedImagesExtensions = '.gif, .png, .jpg, .jpeg'

export function hasImageFileExtension(str: string) {
    return acceptedImagesExtensions.includes(str.split('.')[1])
}