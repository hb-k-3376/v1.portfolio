import { notion } from '@/shared/lib';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export interface ISlugProps {
  params: Promise<{ slug: string }>;
}

// export const revalidate = 3600; // Next js 서버 캐싱

/**
 * 노션 페이지의 본문 ( Contents ) 데이터를 가져오는 api router
 */
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
    console.error('Failed to fetch paginated pages:', error);
    throw new Error('페이지 데이터를 가져오는데 실패했습니다.');
  }
}
