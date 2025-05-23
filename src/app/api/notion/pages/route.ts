import notion from '@/shared/lib/notion';
import { isPageObjectResponse } from '@/shared/utils/guard';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(_: NextRequest) {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;
    // api 요청
    const response: QueryDatabaseResponse = await notion.databases.query({
      database_id: databaseId!,
      filter: {
        property: 'status',
        status: {
          equals: 'published',
        },
      },
      sorts: [
        {
          property: 'createdBy', // 최신글 순서대로
          direction: 'ascending',
        },
      ],
    });

    // 타입 가드
    const pages = response.results.filter(isPageObjectResponse);

    // 결과 값 리턴
    return NextResponse.json({
      body: pages,
    });
  } catch (error) {
    return NextResponse.json(null);
  }
}
