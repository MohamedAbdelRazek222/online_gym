import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiversion: '2023-01-25',
    useCdn: 'true',
    token: import.meta.env.VITE_REACT_APP_SANITY_API_TOKEN
});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);