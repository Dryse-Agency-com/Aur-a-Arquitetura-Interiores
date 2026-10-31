import { useEffect, useState, useRef } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const currentProgress = Number((totalScroll / windowHeight).toFixed(3));
        setProgress(Math.min(1, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}

export function useInView(options: IntersectionObserverInit = { threshold: 0.15 }) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        // once visible, we keep it visible for smooth editorial feel
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref, isInView };
}
