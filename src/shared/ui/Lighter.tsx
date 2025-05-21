'use client';

import { useEffect, useState } from 'react';

export const Lighter = () => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const style = {
    background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
  };

  return <div className="pointer-events-none fixed inset-0 z-50 transition duration-300 lg:absolute" style={style} />;
};
