import { create } from 'zustand';
import { ISearchModelStore } from '../model/type';
/**
 * useSearchModalStore
 * Search 모달 상태를 관리하는 Store
 */
export const useSearchModalStore = create<ISearchModelStore>((set) => ({
  isOpen: false,
  close: () => set({ isOpen: false }),
  open: () => set({ isOpen: true }),
  query: null,
  setQuery: (query) => set({ query }),
}));
