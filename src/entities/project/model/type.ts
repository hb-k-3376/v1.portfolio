export type UrlType = 'github' | 'website' | 'retro';

export type Url = {
  type: UrlType;
  link: string;
  isActive?: boolean;
};

export interface Project {
  name: string;
  period: string;
  description: string;
  roles?: string[];
  tags: string[];
  image: string;
  link: string;
  urls?: Url[];
}
