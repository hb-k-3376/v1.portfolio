export type UrlType = 'github' | 'website' | 'retro';
export type WebsiteStatus = 'active' | 'inactive' | 'maintenance';

export interface ProjectUrl {
  type: UrlType;
  link: string;
  status?: WebsiteStatus;
}

export interface Project {
  name: string;
  period: string;
  description: string;
  roles?: string[];
  tags: string[];
  image: string;
  link?: string;
  urls?: ProjectUrl[];
}
