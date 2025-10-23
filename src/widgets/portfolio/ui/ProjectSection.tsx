import { PROJECT_LIST, ProjectCard } from '@/entities/project';
import { Section } from '@/shared/ui';
/**
 * 메인 페이지의 Notion Project 리스트 섹션
 */
export const ProjectSection = () => {
  return (
    <Section id="project">
      <Section.Header>Projects</Section.Header>
      <ul className="group/list">
        {PROJECT_LIST.map((project) => (
          <ProjectCard {...project} key={project.name} />
        ))}
      </ul>
      {/* <LinkMoreContent text="프로젝트 더보기" link="/#" /> */}
      <span className="cursor-not-allowed text-gray-500">프로젝트 더보기</span>
    </Section>
  );
};
