import { useEffect } from 'react';

export default function useTheme() {
  useEffect(() => {
    const root = document.documentElement;
    const headerHeight = 72;
    root.style.setProperty('--header-height', `${headerHeight}px`);
  }, []);
}
