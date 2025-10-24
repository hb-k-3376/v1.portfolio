import { PageObjectResponse } from '@notionhq/client';

export const isPageObjectResponse = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj: any
): obj is PageObjectResponse => {
  return obj.object === 'page' && 'properties' in obj;
};
