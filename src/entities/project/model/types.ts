import { ITag } from '@/shared/types';

export interface IPage {
  createdBy: string;
  modifiedBy: string;
  status: string;
  tags: ITag[];
  title: string;
  description: string;
}
