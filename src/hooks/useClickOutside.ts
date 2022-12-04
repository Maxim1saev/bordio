import { useEffect } from 'react';

export const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) => {
  const listener = (event: MouseEvent) => {
    if (!ref.current || ref.current === event.target) {
      return;
    }

    handler();
  };

  useEffect(() => {
    document.addEventListener('click', listener, true);

    return () => {
      document.removeEventListener('click', listener, true);
    };
  }, [ref, handler]);
};
