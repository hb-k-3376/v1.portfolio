import { Highlight, Section, SectionHeader } from '@/shared/ui';

export const AboutSection = () => {
  return (
    <Section id="about">
      {/* 섹션 헤더 */}
      <SectionHeader>About</SectionHeader>
      <div aria-labelledby="about-heading">
        <h2 id="about-heading" className="sr-only">
          자기소개
        </h2>
        <p>
          안녕하세요, 프론트엔드 개발자 <Highlight>김현빈</Highlight> 입니다. 백엔드
          개발자로 2년간 일하던 중, 우연한 기회로 리액트 프로젝트를 경험하게 되었습니다.
          사용자와 직접 소통하는 듯한 느낌, 구현한 기능이 즉각적으로 화면에 나타나며 빠른
          피드백을 받는 과정이 저를 사로잡았습니다. 프론트엔드의 매력에 완전히 빠져들었고,
          전환을 결심했습니다. 끈기있고 열정적으로 학습하며 프로그래머스 데브코스를
          수료했고, 2차, 3차 프로젝트를 거쳐 백엔드 팀과 협업하는 마지막 4차 프로젝트에서{' '}
          <Highlight>최우수상</Highlight>을 받았습니다.
        </p>
        <br />
        <p>
          이 성과에는 제 가장 큰 강점인 <Highlight>커뮤니케이션</Highlight>이 큰 역할을
          했다고 생각합니다. 저는 사람들과 대화를 나누고 의견을 공유하며 토론하는 것을
          좋아합니다.{' '}
          <Highlight>
            모르는 것을 적극적으로 질문하고, 팀원들의 관점을 경청하며, 더 나은 방향을 함께
            찾아가는 과정
          </Highlight>
          에서 가장 큰 에너지를 얻습니다. 특히 백엔드 개발 경험 덕분에 API 설계와 데이터
          흐름을 이해하고 있어, 백엔드와 원활히 소통할 수 있습니다.
        </p>
        <br />
        <p>
          개발할 때는 단순히 기능을 구현하는 것을 넘어,{' '}
          <Highlight>
            사용자의 입장에서 깊이 있게 고민하고 그들의 경험을 최우선으로 생각
          </Highlight>
          합니다.{' '}
          <Highlight>
            접근성, 성능, 예외 상황까지 꼼꼼하게 고려하며 작업에 임하고 있습니다.
          </Highlight>{' '}
          이런 접근이 결국 완성도 높은 사용자 경험으로 이어진다고 믿습니다.
        </p>
      </div>
    </Section>
  );
};
