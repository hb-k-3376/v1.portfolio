'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useScrollToHash = () => {
  const router = useRouter();
  console.log(router.asPath); // 현재 URL 경로 + 쿼리 + 해시 포함

  // useEffect(() => {
  //   if (location.hash) {
  //     const id = location.hash.replace('#', '');
  //     const el = document.getElementById(id);

  //     if (el) {
  //       el.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // }, [location]);
};
