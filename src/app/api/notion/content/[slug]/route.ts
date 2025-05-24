import notion from '@/shared/lib/notion';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export interface ISlugProps {
  params: Promise<{ slug: string }>;
}

export async function GET(_: NextRequest, { params }: ISlugProps) {
  try {
    const { slug } = await params;

    const blocks = await notion.blocks.children.list({
      block_id: slug, // 이것만 있으면 됨
    });

    // 결과 값 리턴
    return NextResponse.json({
      body: blocks,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(null);
  }
}
