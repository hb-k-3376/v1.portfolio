import { notion } from '@/shared/lib';
import { PageObjectResponse } from '@notionhq/client';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export interface ISlugProps {
  params: Promise<{ slug: string }>;
}

export async function GET(_: NextRequest, { params }: ISlugProps) {
  try {
    const { slug } = await params;
    const { properties } = (await notion.pages.retrieve({
      page_id: slug,
    })) as PageObjectResponse;

    // 결과 값 리턴
    return NextResponse.json({
      body: properties,
      status: 200,
    });
  } catch (error) {
    console.error('Failed to fetch paginated pages:', error);
    throw new Error('페이지 데이터를 가져오는데 실패했습니다.');
  }
}
