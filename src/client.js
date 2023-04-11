import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '8acacdoc',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.REACT_APP_SECRET_KEY,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
