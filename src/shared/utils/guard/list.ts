import { PageObjectResponse } from '@notionhq/client';

export const isPageObjectResponse = (obj: any): obj is PageObjectResponse[] => {
  return obj.object === 'page' && 'properties' in obj;
};
