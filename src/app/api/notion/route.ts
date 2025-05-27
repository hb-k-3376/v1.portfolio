import { notion } from '@/shared/lib';
import { isPageObjectResponse } from '@/shared/utils';
import { PageObjectResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const pageSize = parseInt(searchParams.get('pageSize') || '10');
    const cursor = searchParams.get('cursor') || undefined;

    const databaseId = process.env.NOTION_DATABASE_ID;
    // api 요청
    const response: QueryDatabaseResponse = await notion.databases.query({
      database_id: databaseId!,
      start_cursor: cursor,
      page_size: pageSize,
      filter: {
        property: 'status',
        status: {
          equals: 'published',
        },
      },
      sorts: [
        {
          property: 'created_time', // 최신글 순서대로
          direction: 'descending',
        },
      ],
    });

    // 타입 가드
    const pages = response.results.filter(isPageObjectResponse);

    // 결과 값 리턴
    return NextResponse.json({
      body: {
        pages: pages as PageObjectResponse[],
        cursor: response.next_cursor,
      },
    });
  } catch (error) {
    console.error('Failed to fetch paginated pages:', error);
    throw new Error('페이지 데이터를 가져오는데 실패했습니다.');
  }
}
