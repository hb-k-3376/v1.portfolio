import { APIResponse } from '@/shared/types/api';
import axios from 'axios';
import { IArchivePage } from './model/type';
import { getCreatedDate, getDescription, getModifiedDate, getTags, getTitle } from '@/shared/utils';

export const getArchiveById = async (slug: string) => {
  const { data } = await axios.get<APIResponse<IArchivePage>>(`http://localhost:3000/api/notion/metadata/${slug}`);

  const title = getTitle(data.body.title);
  const createdBy = getCreatedDate(data.body.createdBy);
  const tags = getTags(data.body.tags);
  const modifiedBy = getModifiedDate(data.body.modifiedBy);
  const description = getDescription(data.body.description);

  return {
    title,
    createdBy,
    tags,
    modifiedBy,
    description,
  };
};
