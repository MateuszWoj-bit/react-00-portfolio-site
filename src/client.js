import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '8acacdoc',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:
    'skTyi02GEHVAbHISlpl3vdNJkF9skB5QL2mm9241pk67L7isA47UUFNGHgTV0zJPbeknKWvQFsNepp2G6tjuPUEFYQSWwUbo5ai3jfdTpEeYU9FKsRFZ0sizv9fYt9kTspNwGsQf8yDO76cDSk1QUkDCmFoAA3vyZnNP5rFmXTSIQMSPyxe3',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
