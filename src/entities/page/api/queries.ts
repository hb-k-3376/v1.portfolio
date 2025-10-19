import { unstable_cache } from 'next/cache';

import { GetPagesOptions } from '../model';

import { fetchNotionPages } from '@/entities/page/api/server';
import { buildPagesQuery } from '@/shared/lib/build-query';
import { isPageObjectResponse } from '@/shared/utils';
import { PageObjectResponse } from '@notionhq/client';

// 서버 컴포넌트 호출 래핑 함수

/**
 * 노션 페이지 리스트 호출 함수
 * unstable_cache로 강제 NEXT.js 캐싱 적용
 * keyParts : ['notion-pages']
 * cacheOptions : { revalidate: 3600, tags: ['pages'] }
 */
export const getPages = unstable_cache(
  async (options: GetPagesOptions = {}) => {
    const { pageSize = 5, cursor = null, searchQuery = null } = options;
    const params = buildPagesQuery({
      pageSize,
      cursor,
      searchQuery,
    });
    const response = await fetchNotionPages(params);

    return {
      pages: response.results.filter(isPageObjectResponse) as PageObjectResponse[], // 타입 가드
      next_cursor: response.next_cursor,
      has_more: response.has_more,
    };
  },
  ['notion-pages'],
  { revalidate: 3600, tags: ['pages'] }
);
