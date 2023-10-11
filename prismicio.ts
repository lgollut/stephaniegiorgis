import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';

import sm from './slicemachine.config.json';

/**
 * The project's Prismic repository name.
 */
export const { repositoryName } = sm;

/**
 * The project's Prismic Route Resolvers. This list determines a Prismic document's URL.
 */
const routes: prismic.ClientConfig['routes'] = [
  {
    type: 'homepage',
    uid: 'homepage',
    path: '/',
  },
  {
    type: 'artworks',
    uid: 'artworks',
    path: '/artworks',
  },
  {
    type: 'artwork',
    path: '/artworks/:uid',
  },
  {
    type: 'presentation',
    uid: 'presentation',
    path: '/presentation',
  },
  {
    type: 'archives',
    uid: 'archives',
    path: '/archives',
  },
  {
    type: 'contact',
    uid: 'contact',
    path: '/contact',
  },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = ({
  previewData,
  req,
  ...config
}: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(sm.repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === 'production'
        ? { next: { tags: ['prismic'] }, cache: 'force-cache' }
        : { next: { revalidate: 5 } },
    ...config,
  });

  prismicNext.enableAutoPreviews({ client, previewData, req });

  return client;
};
