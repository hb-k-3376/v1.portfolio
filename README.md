# 김현빈 | 프론트엔드 개발자 포트폴리오

안녕하세요, 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자 김현빈입니다. 백엔드 개발 경험을 바탕으로 원활한 협업과 커뮤니케이션을 지향하며, 디테일을 놓치지 않는 완성도 높은 제품을 만들기 위해 노력합니다.

이 프로젝트는 저의 프로젝트와 아티클을 소개하기 위해 Next.js와 TypeScript 기반으로 제작한 개인 포트폴리오 웹사이트입니다.

---

### **🌐 Live Site**

> [포트폴리오 웹사이트 바로가기](https://your-portfolio-url.com) 👈

---

## 주요 기능

-   **소개**: 저에 대한 간략한 소개입니다.
-   **프로젝트**: 제가 진행했던 프로젝트 목록입니다.
-   **아카이브**: Notion API를 통해 동적으로 가져오는 기술 블로그 섹션입니다.
-   **검색**: 아카이브 내의 게시물을 검색할 수 있습니다.
-   **댓글**: Giscus를 연동하여 댓글 기능을 구현했습니다.
-   **반응형 디자인**: 다양한 화면 크기에 최적화되어 있습니다.

## 기술 스택

-   **프레임워크**: [Next.js](https://nextjs.org/)
-   **언어**: [TypeScript](https://www.typescriptlang.org/)
-   **스타일링**: [Tailwind CSS](https://tailwindcss.com/)
-   **데이터 페칭**: [TanStack Query](https://tanstack.com/query/latest)
-   **CMS**: [Notion API](https://developers.notion.com/)
-   **댓글**: [Giscus](https://giscus.app/)

## 아키텍처 및 주요 결정

-   **Notion을 Headless CMS로 활용**
    -   블로그 게시물(아카이브) 관리를 위해 Notion을 Headless CMS로 선택했습니다. 이를 통해 개발 지식이 없어도 콘텐츠를 쉽게 작성하고 수정할 수 있으며, API를 통해 데이터를 동적으로 웹사이트에 표시하여 유지보수 편의성을 높였습니다.

-   **프로젝트 구조**
    -  프로젝트의 확장성을 고려하여 Feature-Sliced Design(FSD) 아키텍처를 적용했습니다. app, widgets, features, entities, shared 계층으로 구조를 분리하여 각 모듈의 책임과 의존성을 명확히 하고, 새로운 기능 추가 시에도 기존 코드에 영향을 최소화하도록 설계했습니다.

-   **성능 최적화**
    -   Next.js의 SSG(Static Site Generation)와 ISR(Incremental Static Regeneration)을 활용하여 초기 로딩 속도를 개선하고 SEO를 최적화했습니다.
    -   이미지와 같이 무거운 리소스는 `next/image`를 통해 최적화하고, 인터랙션이 필요한 부분은 Code Splitting을 적용하여 사용자 경험을 향상시켰습니다.
