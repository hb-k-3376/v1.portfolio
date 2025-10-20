import { useEffect, useRef } from 'react';

interface Props {
  onIntersect: () => void;
  rootMargin?: string;
  threshold?: number;
}

export const useInfinityScrollObserver = ({
  onIntersect,
  rootMargin = '200px',
  threshold = 0.1,
}: Props) => {
  /*
  트리거 요소를 설정하고 해당 트리거 요소가 보이면 isIntersecting가 동작하면서 onIntersect가 실행됨
  */
  const targetRef = useRef<HTMLTableSectionElement>(null);

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      { rootMargin, threshold }
    );

    //targetRef 트리거 요소를 옵져브
    observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, [onIntersect, rootMargin, threshold]);

  return targetRef;
};
