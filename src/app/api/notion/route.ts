import { notion } from '@/shared/lib';
import { isPageObjectResponse } from '@/shared/utils';
import {
  PageObjectResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// export const revalidate = 360; // Next js 서버 캐싱

/**
 * 노션의 페이지( 데이터베이스 ) 리스트를 fetch하는 api router
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const pageSize = parseInt(searchParams.get('pageSize') || '10');
    const cursor = searchParams.get('cursor') || null;
    const query = searchParams.get('query') || null;

    const baseFilter = {
      property: 'status',
      status: {
        equals: 'published',
      },
    };

    const hasQueryKeyword = query && query.trim() !== '';

    const filter = hasQueryKeyword
      ? {
          and: [
            baseFilter,
            {
              property: 'title',
              rich_text: {
                contains: query.trim(),
              },
            },
          ],
        }
      : baseFilter;

    const databaseId = process.env.NOTION_DATABASE_ID;
    // api 요청
    const response: QueryDatabaseResponse = await notion.databases.query({
      database_id: databaseId!,
      start_cursor: cursor ?? undefined,
      page_size: pageSize,
      filter,
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
