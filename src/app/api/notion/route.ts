import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { getPages } from '@/entities/page/api/queries';
/**
 * 노션의 페이지( 데이터베이스 ) 리스트를 fetch하는 api router
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // api 요청
    const response = await getPages({
      pageSize: parseInt(searchParams.get('pageSize') || '10'),
      cursor: searchParams.get('cursor'),
      query: searchParams.get('query') ?? null,
    });

    // 결과 값 리턴
    return NextResponse.json({ body: response });
  } catch (error) {
    console.error('Failed to fetch paginated pages:', error);
    throw new Error('페이지 데이터를 가져오는데 실패했습니다.');
  }
}
