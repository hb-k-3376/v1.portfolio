import { unstable_cache } from 'next/cache';

import { GetPagesOptions } from '../model';

import { fetchNotionDataQuery, fetchNotionPageContent } from '@/entities/page/api/server';
import { buildMetaQuery, buildPagesQuery } from '@/shared/lib/build-query';
import { ContentProperty, MultiSelectProperty } from '@/shared/types';
import { isPageObjectResponse } from '@/shared/utils';
import { PageObjectResponse } from '@notionhq/client';
import { formatMetaData } from '../model/helper';

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
    const response = await fetchNotionDataQuery(params);

    return {
      pages: response.results.filter(isPageObjectResponse) as PageObjectResponse[], // 타입 가드
      next_cursor: response.next_cursor,
      has_more: response.has_more,
    };
  },
  ['notion-pages'],
  { revalidate: 3600, tags: ['pages'] }
);

/**
 * 페이지 메타 데이터 호출 함수
 * unstable_cache로 강제 NEXT.js 캐싱 적용
 * keyParts : ['page-metadata']
 * cacheOptions : { revalidate: 3600, tags: ['pages'] }
 */
export const getPageMetadataBySlug = (slug: string) => {
  return unstable_cache(
    async () => {
      const params = buildMetaQuery({ slug });
      const response = await fetchNotionDataQuery(params);

      const properties = (response.results[0] as PageObjectResponse).properties;

      const formatted = formatMetaData({
        created_time: properties.created_time,
        description: properties.description,
        id: response.results[0].id,
        modified_time: properties.modified_time,
        tags: properties.tags as MultiSelectProperty,
        title: properties.title,
      });

      return formatted;
    },
    [`page-metadata`, slug],
    {
      revalidate: 3600,
      tags: ['metadata'],
    }
  )();
};

/**
 * 페이지 본문 데이터 호출 함수
 * unstable_cache로 강제 NEXT.js 캐싱 적용
 * keyParts : ['page-content']
 * cacheOptions : { revalidate: 3600, tags: ['content'] }
 */
export const getPageContentById = async (id: string): Promise<ContentProperty[]> => {
  return unstable_cache(
    async () => {
      const response = await fetchNotionPageContent(id);

      return response.results as ContentProperty[];
    },
    [`page-content`, id],
    {
      revalidate: 3600,
      tags: ['content'],
    }
  )();
};
