import { create } from 'zustand';
import { SearchModelStore } from '../model/type';
/**
 * useSearchModalStore
 * Search 모달 상태를 관리하는 Store
 */
export const useSearchModalStore = create<SearchModelStore>((set) => ({
  isOpen: false,
  close: () => set({ isOpen: false }),
  open: () => set({ isOpen: true }),
  query: null,
  setQuery: (query) => set({ query }),
}));
