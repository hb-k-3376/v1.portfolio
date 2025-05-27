import { ContentProperty, MultiSelectProperty, TextProperty, TimeProperty } from '@/shared/types/notion';
import { PageObjectResponse } from '@notionhq/client';

/**
 * IPageMetadata
 * 노션 page에서 id로 가져오는 인터페이스
 * Metadata
 */
export interface IPageMetadata {
  created_time: TimeProperty;
  description: TextProperty;
  title: TextProperty;
  tags: MultiSelectProperty;
  modified_time: TimeProperty;
}
/**
 * IPageContent
 * 노션 page에서 id로 가져오는 인터페이스
 * content
 */
export interface IPageContent {
  object: string;
  results: ContentProperty[];
}
/**
 * IPagesResponse
 * 노션 pages로 가져오는 인터페이스
 * 페이지네이션을 위한 next_cursor
 * { pages , cursor }
 */
export interface IPagesResponse {
  pages: PageObjectResponse[];
  cursor: string | undefined;
}

/**
 * ISearchModelStore
 * Search model open state 인터페이스
 * 서치 모달창과 검색어 (query) 제어하기 위한 store
 */
export interface ISearchModelStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  /** 검색어 query */
  query: string | null;
  setQuery: (query: string | null) => void;
}
