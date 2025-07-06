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
