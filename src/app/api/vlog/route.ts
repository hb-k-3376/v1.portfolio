import notion from '@/shared/lib/notion';
import axios, { AxiosError } from 'axios';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;
    // api 요청
    const response = await notion.databases.query({
      database_id: databaseId!,

      sorts: [
        {
          property: 'title', // 데이터베이스의 제목 필드 이름
          direction: 'ascending',
        },
      ],
    });
    // 통신 체크

    // 결과 값 리턴
    return NextResponse.json({
      body: response,
    });
  } catch (error) {
    return NextResponse.json(null);
  }
}
