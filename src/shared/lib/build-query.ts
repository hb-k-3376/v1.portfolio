import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';
import { getEnv } from './env';
import { IS_DEV } from '../utils';

// 페이지 네이션 파라미터
export const buildPagesQuery = (options: {
  pageSize: number;
  cursor: string | null;
  query: string | null;
}) => {
  const { cursor, pageSize, query } = options;
  const baseFilter = IS_DEV
    ? {
        or: [
          {
            property: 'status',
            status: {
              equals: 'published',
            },
          },
          {
            property: 'status',
            status: {
              equals: 'draft',
            },
          },
        ],
      }
    : {
        property: 'status',
        status: {
          equals: 'published',
        },
      };

  const filter = query?.trim()
    ? {
        and: [baseFilter, { property: 'title', rich_text: { contains: query.trim() } }],
      }
    : baseFilter;

  const databaseId = getEnv('NOTION_DATABASE_ID');
  return {
    database_id: databaseId,
    start_cursor: cursor ?? undefined,
    page_size: pageSize,
    filter,
    sorts: [
      {
        property: 'created_time',
        direction: 'descending',
      },
    ],
  } satisfies QueryDatabaseParameters;
};

// 메타 데이터 파라미터
export const buildMetaQuery = (options: { slug: string }) => {
  const { slug } = options;
  const databaseId = getEnv('NOTION_DATABASE_ID');

  return {
    database_id: databaseId,
    filter: { property: 'slug', rich_text: { equals: slug } },
  };
};
