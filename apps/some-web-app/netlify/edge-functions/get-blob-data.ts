import { Context } from '@netlify/edge-functions';
import { someBlobStore } from './helpers/store/blob-store.ts';

export default async (request: Request, context: Context) => {
  return new Response(await someBlobStore.get('some-blob-key'), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
