'use client';
import { ItemCard } from '@/entities/project';
import { Section } from '@/shared/ui';
import { Header } from '@/widgets/header';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [pages, setPages] = useState([]);

  const fetchNotionData = async () => {
    const res = await axios.get('/api/notion/pages');
    console.log(res.data.body);
    setPages(res.data.body);
  };

  useEffect(() => {
    fetchNotionData();
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main className="pt-24 lg:w-[52%] lg:py-24">
          <Section id="home">
            <ul className="group/list">
              {pages.map((_, idx) => {
                return (
                  <li className="mb-12" key={idx}>
                    <ItemCard />
                  </li>
                );
              })}
            </ul>
          </Section>
          <Section id="story">
            <ul className="group/list">
              {Array(5)
                .fill(0)
                .map((_, idx) => {
                  return (
                    <li className="mb-12" key={idx}>
                      <ItemCard />
                    </li>
                  );
                })}
            </ul>
          </Section>
          <Section id="about">
            <ul className="group/list">
              {Array(5)
                .fill(0)
                .map((_, idx) => {
                  return (
                    <li className="mb-12" key={idx}>
                      <ItemCard />
                    </li>
                  );
                })}
            </ul>
          </Section>
        </main>
      </div>
    </div>
  );
}
