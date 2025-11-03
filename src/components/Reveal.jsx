import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

export default function Reveal({
  children,
  className = '',
  once = true,
  rootMargin = '0px 0px -10% 0px',
  threshold = 0.1,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin, threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once, rootMargin, threshold]);

  // basic reveal classes: start hidden + translateY, then fade/translate in
  const base = 'transition-all duration-500';
  const hidden = 'opacity-0 translate-y-6';
  const shown = 'opacity-100 translate-y-0';

  return (
    <div
      ref={ref}
      className={`${className} ${base} ${visible ? shown : hidden}`}
    >
      {children}
    </div>
  );
}
