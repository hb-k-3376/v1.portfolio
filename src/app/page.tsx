import { Section } from '@/shared/ui';
import { Header } from '@/widgets/header';
import { formatPageData } from '@/entities/page/model/helper';
import { PageCard } from '@/entities/page';
import { getPages } from '@/features/archive/services';

/**
 *  루트 페이지
 *  /intro - introduction 영역
 *  /project   - project 영역
 *  /archive    - archive 영역
 */
export default async function page() {
  const pages = await getPages();

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main className="pt-24 lg:w-[52%] lg:py-24">
          {/**
           * intro section
           */}
          <Section id="intro">
            <div className="sticky z-20 top-0 md-4 md:-mx-12 md:px-12 w-screen py-5 bg-slate-900/75 backdrop-blur lg:opacity-0 lg:relative lg:top-auto lg:w-full">
              <h2 className="text-slate-200 uppercase tracking-widest font-bold lg:sr-only">Notion</h2>
            </div>
            <ul className="group/list">
              {pages.map((page, idx) => {
                const formatted = formatPageData(page.properties);
                return (
                  <li className="mb-12" key={idx}>
                    <PageCard {...formatted} />
                  </li>
                );
              })}
            </ul>
          </Section>
          {/**
           * project section
           */}
          <Section id="project">
            <ul className="group/list">
              {Array(5)
                .fill(0)
                .map((_, idx) => {
                  return (
                    <li className="mb-12" key={idx}>
                      <PageCard id="" createdBy="a" description="a" tags={[]} title="" />
                    </li>
                  );
                })}
            </ul>
          </Section>
          {/**
           * archive section
           */}
          <Section id="archive">
            <ul className="group/list">
              {Array(5)
                .fill(0)
                .map((_, idx) => {
                  return (
                    <li className="mb-12" key={idx}>
                      <PageCard id="" createdBy="a" description="a" tags={[]} title="" />
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
