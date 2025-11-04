import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

export default function ScrollToTopMoto({
  appearThreshold = 48, // px desde el fondo para considerar "al final"
}) {
  const [visible, setVisible] = useState(false);
  const [starting, setStarting] = useState(false);
  const [takingOff, setTakingOff] =
    useState(false);
  const rafRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      // Mostrar solo cuando se llega al final (o muy cerca)
      const scrollY =
        window.scrollY || window.pageYOffset;
      const innerH = window.innerHeight;
      const fullH =
        document.documentElement.scrollHeight ||
        document.body.scrollHeight;
      const atBottom =
        innerH + scrollY >=
        fullH - appearThreshold;
      setVisible(atBottom);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true,
    });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener(
        'scroll',
        onScroll
      );
      window.removeEventListener(
        'resize',
        onScroll
      );
      if (rafRef.current)
        cancelAnimationFrame(rafRef.current);
    };
  }, [appearThreshold]);

  function smoothScrollToTop(duration = 1200) {
    const start =
      window.scrollY || window.pageYOffset;
    const startTime = performance.now();
    const easeInOutQuad = (t) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(
        1,
        elapsed / duration
      );
      const eased = easeInOutQuad(progress);
      const y = Math.round(start * (1 - eased));
      window.scrollTo(0, y);
      if (progress < 1)
        rafRef.current =
          requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  }

  const handleClick = () => {
    // Pequeña animación de arranque antes del despegue
    setStarting(true);
    window.setTimeout(() => {
      setStarting(false);
      setTakingOff(true);
      // Iniciar scroll al tope más lento y suave
      smoothScrollToTop(1200);
      // Tras la animación, ocultar
      window.setTimeout(() => {
        setTakingOff(false);
        setVisible(false);
      }, 1100);
    }, 500);
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      className={[
        'fixed right-4 md:right-6 bottom-24 md:bottom-28 z-30',
        'select-none outline-none  rounded-full',
        'transition-all duration-500',
        starting ? 'animate-pulse' : '',
        takingOff
          ? '-translate-x-[120vw] opacity-0 duration-1000 ease-out will-change-transform pointer-events-none'
          : '',
      ].join(' ')}
      aria-label="Volver arriba"
      title="Volver arriba"
    >
      <MotoEmoji />
    </button>
  );
}

function MotoEmoji() {
  return (
    <span
      aria-hidden="true"
      className="text-5xl md:text-6xl drop-shadow-lg  inline-block origin-center"
    >
      🏍️
    </span>
  );
}
