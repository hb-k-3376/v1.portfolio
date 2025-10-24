'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export const ModalPortal = ({ children, onClose, isOpen }: Props) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return createPortal(
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 bg-black/70 flex justify-center items-start"
      onClick={handleClickOutside}
      role="dialog"
      aria-modal="true"
    >
      {children}
    </div>,
    document.body
  );
};
