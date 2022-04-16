import { getAccessToken } from '@auth0/nextjs-auth0';
import httpProxyMiddleware from 'next-http-proxy-middleware';
import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  }
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { accessToken } = await getAccessToken(request, response);

  return httpProxyMiddleware(request, response, {
    target: 'http://localhost:3332/graphql',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    }
  });
}
