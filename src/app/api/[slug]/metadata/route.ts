import { notion } from '@/shared/lib';
import { PageObjectResponse } from '@notionhq/client';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export interface ISlugProps {
  params: Promise<{ slug: string }>;
}

// export const revalidate = 3600; // Next js 서버 캐싱

/**
 * 노션 페이지의 메타 데이터를 가져오는 api router
 */
export async function GET(_: NextRequest, { params }: ISlugProps) {
  try {
    const { slug } = await params;
    // const { properties } = (await notion.pages.retrieve({
    //   page_id: slug,
    // })) as PageObjectResponse;

    const { results } = (await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: { property: 'slug', rich_text: { equals: slug } },
    })) as QueryDatabaseResponse;

    // 결과 값 리턴
    return NextResponse.json({
      body: {
        ...(results[0] as PageObjectResponse).properties,
        id: results[0].id,
      },
      status: 200,
    });
  } catch (error) {
    console.error('Failed to fetch paginated pages:', error);
    throw new Error('페이지 데이터를 가져오는데 실패했습니다.');
  }
}
