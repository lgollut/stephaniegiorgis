import { createClient } from '@prismicio/client';
import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

import sm from '../../../slicemachine.config.json';

const defaultTag = 'prismic';

export async function POST(request: Request) {
  const body = await request.json();

  if (body.secret !== process.env.REVALIDATE_SECRET) {
    return new NextResponse('Invalid token', { status: 401 });
  }

  const client = createClient(sm.repositoryName);
  const revalidated: string[] = [];

  if (
    !body.documents ||
    !Array.isArray(body.documents) ||
    body.documents.length === 0
  ) {
    revalidateTag(defaultTag);
    revalidated.push(defaultTag);
  } else {
    const documents = await client.getAllByIDs(body.documents);

    for (const document of documents) {
      if (!document.uid) {
        continue;
      }

      revalidateTag(document.uid);
      revalidated.push(document.uid);
    }
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
