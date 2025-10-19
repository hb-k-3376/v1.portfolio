import { notion } from '@/shared/lib';
import {
  QueryDatabaseParameters,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';

/**
 * 노션 SDK
 * 노션 데이터 베이스에서 page 리스트 가져오는 함수
 * @param params
 * @returns
 */
export const fetchNotionDataQuery = async (
  params: QueryDatabaseParameters
): Promise<QueryDatabaseResponse> => {
  return await notion.databases.query(params);
};

/**
 * 노션 SDK
 * 노션 데이터베이스에서 page 본문 (block) 가져오는 함수
 * @param slug
 * @returns
 */
export const fetchNotionPageContent = async (slug: string) => {
  return await notion.blocks.children.list({
    block_id: slug,
  });
};
