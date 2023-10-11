import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

import { createClient } from '@/prismicio';

export async function POST(request: Request) {
  const body = await request.json();

  if (body.secret !== process.env.REVALIDATE_SECRET) {
    return new NextResponse('Invalid token', { status: 401 });
  }

  const client = createClient({ ref: body.masterRef });

  const documents = await client.getAllByIDs(body.documents);
  const revalidated: string[] = [];

  for (const document of documents) {
    if (!document.uid) {
      continue;
    }

    revalidateTag(document.uid);
    revalidated.push(document.uid);
  }

  return NextResponse.json({ revalidated, now: Date.now() });
}
