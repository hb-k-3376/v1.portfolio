import { PageObjectResponse } from '@notionhq/client';
import { IPage } from './types';

export const getPropertiesValues = (properties: PageObjectResponse['properties'], name: string): IPage | null => {
  const property = properties[name];

  if (!property) return null;

  return null;
};
