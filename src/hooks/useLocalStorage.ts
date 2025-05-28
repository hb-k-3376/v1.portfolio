'use client';

import { LOCALSTORAGE_KEY_SEARCH_HISTORY } from '@/shared/constants';
import { useEffect, useState } from 'react';

export const useLocalStorage = () => {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const LOCALSTORAGE_LIMIT = 10;

  /**
   * 컴포넌트 마운트 시 로컬스토리지에서 초기 데이터 로드
   */
  useEffect(() => {
    try {
      const existingData = localStorage.getItem(LOCALSTORAGE_KEY_SEARCH_HISTORY);
      if (existingData) {
        const parsed = JSON.parse(existingData);
        setSearchHistory(Array.isArray(parsed) ? parsed : []);
      }
    } catch (error) {
      console.error('검색 기록 로드 중 오류 발생 : ', error);
      setSearchHistory([]);
    }
  }, []);
  /**
   * searchHistory 업데이트 시 리렌더링 트리거
   */
  useEffect(() => {
    try {
      localStorage.setItem(LOCALSTORAGE_KEY_SEARCH_HISTORY, JSON.stringify(searchHistory));
    } catch (error) {
      console.error('검색 기록 저장 중 오류:', error);
    }
  }, [searchHistory]);

  /**
   * 로컬 스토리지 중복 제거
   */
  const removeDuplication = (searchArray: string[], trimmedQuery: string): string[] => {
    return searchArray.filter((term) => term !== trimmedQuery);
  };

  /**
   * 로컬 스토리지 저장
   */
  const setLocalStorage = (query: string) => {
    try {
      const trimmed = query.trim();
      if (trimmed === '') return;
      let newArray = removeDuplication(searchHistory, trimmed);

      newArray.unshift(trimmed); // 검색어 가장 앞에 저장

      // 검색 기록 개수 제한
      if (newArray.length > LOCALSTORAGE_LIMIT) {
        newArray = newArray.slice(0, LOCALSTORAGE_LIMIT);
      }
      setSearchHistory(newArray); // 저장
    } catch (error) {
      console.error('검색어 추가 중 에러 발생 : ', error);
      setSearchHistory([]); // 초기화
    }
  };

  /**
   * 로컬리토리지 검색어 삭제
   */
  const removeLocalStorage = (query: string) => {
    try {
      const trimmed = query.trim();
      if (trimmed === '') return;
      let newArray = removeDuplication(searchHistory, trimmed); // 삭제

      setSearchHistory(newArray); // 저장
    } catch (error) {
      console.error('검색어 추가 중 에러 발생 : ', error);
    }
  };

  return {
    searchHistory: searchHistory,
    setSearchHistory: setLocalStorage,
    removeSearchHistory: removeLocalStorage,
  };
};
