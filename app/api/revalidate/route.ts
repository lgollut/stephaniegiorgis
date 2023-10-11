import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  if (body.secret !== process.env.REVALIDATE_SECRET) {
    return new NextResponse('Invalid token', { status: 401 });
  }

  // const client = createClient(sm.repositoryName);

  // const documents = await client.getAllByIDs(body.documents);
  // const revalidated: string[] = [];

  // for (const document of documents) {
  //   if (!document.uid) {
  //     continue;
  //   }

  //   revalidateTag(document.uid);
  //   revalidated.push(document.uid);
  // }
  revalidateTag('prismic');

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
