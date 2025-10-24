/**
 * SearchModelStore
 * Search model open state 인터페이스
 * 서치 모달창과 검색어 (query) 제어하기 위한 store
 */
export interface SearchModelStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}
