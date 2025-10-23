import { Highlight, Section } from '@/shared/ui';
import { TECH_STACK_LIST } from '../model/constant';
import { TechStackCard } from './TechStackCard';

export const AboutSection = () => {
  return (
    <Section id="about">
      {/* 섹션 헤더 */}
      <Section.Header>About</Section.Header>
      <div aria-labelledby="about-heading" className="mb-6">
        <h3 id="about-heading" className="sr-only">
          자기소개
        </h3>
        <p>
          안녕하세요, 프론트엔드 개발자 <Highlight>김현빈</Highlight>입니다. 저의 가장 큰
          강점은 <Highlight>끈기 있고 열정적인 태도</Highlight>입니다. 프로그래머스
          데브코스를 수료하며 2차, 3차, 4차 프로젝트 모두 <Highlight>최우수상</Highlight>
          을 받을 만큼 몰입하고 노력했습니다. 구현한 기능이 즉각적으로 화면에 나타나는
          프론트엔드의 매력에 빠져들었고, 빠른 성장을 이어왔습니다.
        </p>
        <br />
        <p>
          이런 성과에는 <Highlight>커뮤니케이션</Highlight>이 큰 역할을 했다고 생각합니다.{' '}
          저는 사람들과 대화를 나누고 의견을 공유하며 토론하는 것을 좋아합니다. 모르는
          것을 적극적으로 질문하고, 팀원들의 관점을 경청하며, 더 나은 방향을 함께 찾아가는
          과정에서 가장 큰 에너지를 얻습니다. 특히{' '}
          <Highlight>2년간 백엔드 실무 경험</Highlight>이 있어 API 설계와 데이터 흐름을
          이해하고 있고, 이는 백엔드 팀과 원활히 소통하는 데 큰 도움이 되었습니다.{' '}
        </p>
        <br />
        <p>
          개발할 때는 <Highlight>사용자 경험</Highlight>을 최우선으로 생각합니다. 개발할
          때는 단순히 기능을 구현하는 것을 넘어, 사용자의 입장에서 깊이 있게 고민하고
          그들의 경험을 최우선으로 생각 합니다.{' '}
          <Highlight>
            접근성, 성능, 예외 상황까지 꼼꼼하게 고려하며 작업에 임하고 있습니다.
          </Highlight>{' '}
          이런 접근이 결국 완성도 높은 사용자 경험으로 이어진다고 믿습니다.
        </p>
        <br />
        <p className="mb-4 text-sm">아래 도구들로 문제를 해결합니다.</p>
      </div>
      {/* 기술 스택  */}
      <ul className="group/list grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 gap-6">
        {TECH_STACK_LIST.map((tech) => (
          <TechStackCard {...tech} key={tech.tech} />
        ))}
      </ul>
    </Section>
  );
};
