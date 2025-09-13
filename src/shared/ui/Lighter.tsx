// 'use client';

// import { useEffect, useState } from 'react';

// export const Lighter = () => {
//   const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePos({ x: e.pageX, y: e.pageY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const style = {
//     background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
//     // background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.12), transparent 80%)`,
//     // background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(251, 146, 60, 0.1), transparent 80%)`,
//   };

//   return (
//     <div
//       className="pointer-events-none fixed inset-0 z-50 transition duration-300"
//       style={style}
//     />
//   );
// };
'use client';

import { useEffect, useRef } from 'react';

export const Lighter = () => {
  const lighterRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(() => {
        if (!lighterRef.current) return;
        lighterRef.current.style.background = `
          radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)
        `;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={lighterRef}
      className="pointer-events-none fixed inset-0 z-50 hidden sm:block"
    />
  );
};
