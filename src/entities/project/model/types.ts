import { ITag } from '@/shared/types';

export interface IPage {
  createdBy: string;
  tags: ITag[];
  title: string;
  description: string;
}
