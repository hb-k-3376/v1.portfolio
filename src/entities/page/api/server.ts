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
export const fetchNotionPages = async (
  params: QueryDatabaseParameters
): Promise<QueryDatabaseResponse> => {
  return await notion.databases.query(params);
};
