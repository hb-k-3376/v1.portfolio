export type UrlType = 'github' | 'website';
export type WebsiteStatus = 'active' | 'inactive' | 'maintenance';

export interface ProjectUrl {
  type: UrlType;
  link: string;
  status: WebsiteStatus;
}

export interface Project {
  title: string;
  subTitle: string;
  period: string;
  description: string;
  roles?: string[];
  tags: string[];
  image: string;
  retroLink?: string;
  urls?: ProjectUrl[];
}
