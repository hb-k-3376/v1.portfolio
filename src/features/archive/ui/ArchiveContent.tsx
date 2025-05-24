'use client';

import axios from 'axios';
import { useEffect } from 'react';

export const ArchiveContent = ({ slug }: { slug: string }) => {
  const fetchData = async () => {
    const res = await axios.get(`/api/notion/content/${slug}`);
    console.log(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <></>;
};
