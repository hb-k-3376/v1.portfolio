import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';
import { getEnv } from './env';

export const buildPagesQuery = (options: {
  pageSize: number;
  cursor: string | null;
  searchQuery: string | null;
}) => {
  const { cursor, pageSize, searchQuery } = options;

  const baseFilter = {
    property: 'status',
    status: {
      equals: 'published',
    },
  };

  const filter = searchQuery?.trim()
    ? {
        and: [
          baseFilter,
          { property: 'title', rich_text: { contains: searchQuery.trim() } },
        ],
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
