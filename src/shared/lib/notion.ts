import { Client } from '@notionhq/client';

// notion 클라이언트
export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});
