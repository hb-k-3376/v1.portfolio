import { useEffect, useRef } from 'react';

interface Props {
  onIntersect: () => void;
  rootMargin?: string;
  threshold?: number;
}

const useInfinityScrollObserver = ({
  onIntersect,
  rootMargin = '200px',
  threshold = 0.1,
}: Props) => {
  const targetRef = useRef<HTMLDivElement>(null);

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

    observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, [onIntersect, rootMargin, threshold]);

  return targetRef;
};

export default useInfinityScrollObserver;
