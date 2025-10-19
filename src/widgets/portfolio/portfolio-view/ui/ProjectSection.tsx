import { PROJECT_LIST, ProjectCard } from '@/entities/project';
import { LinkMoreContent, Section } from '@/shared/ui';
/**
 * 메인 페이지의 Notion Project 리스트 섹션
 */
export const ProjectSection = () => {
  return (
    <Section id="project">
      <header className="sticky z-20 top-0 md-4 md:-mx-12 md:px-12 w-full py-5 bg-slate-900/75 backdrop-blur lg:opacity-0 lg:relative lg:top-auto">
        <h2 className="text-base uppercase tracking-widest font-bold lg:sr-only">
          Projects
        </h2>
      </header>
      <ul className="group/list">
        {PROJECT_LIST.map((project) => (
          <li className="mb-12" key={project.name}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
      <LinkMoreContent text="View More Project" link="/#" />
    </Section>
  );
};
