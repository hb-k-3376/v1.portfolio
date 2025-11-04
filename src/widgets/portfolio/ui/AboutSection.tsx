import { Highlight, Section } from '@/shared/ui';
import { techStackList } from '../model/constant';
import { TechStackCard } from './TechStackCard';

export const AboutSection = () => {
  return (
    <Section id="about">
      {/* 섹션 헤더 */}
      <Section.Header>About</Section.Header>
      <div aria-labelledby="about-heading" className="mb-6 flex flex-col gap-2.5">
        <h3 id="about-heading" className="sr-only">
          자기소개
        </h3>
        <p className="indent-4">
          안녕하세요, 프론트엔드 개발자 <Highlight>김현빈</Highlight>입니다. 저는{' '}
          <Highlight>끈기와 열정</Highlight>을 바탕으로 꾸준히 성장하고 있습니다. 기술
          블로그를 꾸준히 작성하며 배운 내용을 체계적으로 정리하고, 프로젝트를 주도적으로
          이끌며 몰입한 결과, 프로그래머스 데브코스 수료와 2차·3차·4차 프로젝트{' '}
          <Highlight>최우수상</Highlight>
          수상이라는 성과를 얻었습니다.
        </p>
        <p>
          이 과정에서 저의 <Highlight>커뮤니케이션 능력</Highlight>이 큰 힘이 되었습니다.
          저는 사람들과 의견을 나누고 토론하는 것을 좋아하며, 모르는 점은 적극적으로
          질문하고 팀원들의 생각을 경청합니다.{' '}
          <Highlight>특히 2년간 풀스택 실무</Highlight> 경험을 쌓으며 API 설계와 데이터
          흐름을 이해하고 있어, 백엔드 팀과 원활하게 소통할 수 있었습니다.
        </p>
        <p>
          개발할 때는 항상 <Highlight>사용자 경험</Highlight>을 최우선으로 생각합니다.
          기능 구현에 그치지 않고, 사용자의 입장에서 문제를 깊이 고민하며{' '}
          <Highlight>
            웹 접근성, 성능, 예외 상황까지 꼼꼼하게 고려하며 작업에 임하고 있습니다.
          </Highlight>{' '}
          이런 접근이 결국 완성도 높은 사용자 경험으로 이어진다고 확신합니다.
        </p>
        <p className="mb-4 text-sm">아래 도구들로 문제를 해결합니다.</p>
      </div>
      {/* 기술 스택  */}
      <ul
        className="group/list grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 gap-6"
        aria-label="기술 스택 목록"
        role="list"
      >
        {techStackList.map((tech) => (
          <TechStackCard {...tech} key={tech.tech} />
        ))}
      </ul>
    </Section>
  );
};
