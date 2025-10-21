import { PROJECT_LIST, ProjectCard } from '@/entities/project';
import { LinkMoreContent, Section, SectionHeader } from '@/shared/ui';
/**
 * 메인 페이지의 Notion Project 리스트 섹션
 */
export const ProjectSection = () => {
  return (
    <Section id="project">
      <SectionHeader>Projects</SectionHeader>
      <ul className="group/list">
        {PROJECT_LIST.map((project) => (
          <li className="mb-12" key={project.name}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
      <LinkMoreContent text="프로젝트 더보기" link="/#" />
    </Section>
  );
};
