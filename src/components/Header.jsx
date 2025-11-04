import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [activeLink, setActiveLink] =
    useState('top');
  const firstLinkRef = useRef(null);
  const [
    activeAnimationHeader,
    setActiveAnimationHeader,
  ] = useState(true);

  function handleNavClick(e, id) {
    // allow keyboard activation etc
    if (
      e &&
      typeof e.preventDefault === 'function'
    )
      e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    // compute header height to offset sticky header
    const headerEl =
      document.querySelector('header');
    const offset = headerEl
      ? headerEl.offsetHeight
      : 0;
    const top =
      el.getBoundingClientRect().top +
      window.scrollY -
      offset +
      2; // small gap

    console.log(top);
    console.log(el);

    setActiveLink(el.id);

    window.scrollTo({ top, behavior: 'smooth' });
    // close mobile drawer if open
    setOpen(false);
  }

  // detectar tamaño del dispositivo
  useEffect(() => {
    if (window.innerWidth < 768) {
      setActiveAnimationHeader(false);
    }
  }, []);

  // Scroll listener to detect if we're at the top
  useEffect(() => {
    const onScroll = () =>
      setAtTop(window.scrollY === 0);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener(
        'scroll',
        onScroll
      );
  }, []);

  // Keyboard + focus trap for mobile drawer
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }

    function handleTab(e) {
      if (!open) return;
      const drawer = document.getElementById(
        'mobile-menu'
      );
      if (!drawer) return;
      const focusable = Array.from(
        drawer.querySelectorAll(
          'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (el) => !el.hasAttribute('disabled')
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last =
        focusable[focusable.length - 1];
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }

    if (open) {
      document.addEventListener('keydown', onKey);
      document.addEventListener(
        'keydown',
        handleTab
      );
      document.body.style.overflow = 'hidden';
      setTimeout(
        () => firstLinkRef.current?.focus(),
        20
      );
    } else {
      document.removeEventListener(
        'keydown',
        onKey
      );
      document.removeEventListener(
        'keydown',
        handleTab
      );
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener(
        'keydown',
        onKey
      );
      document.removeEventListener(
        'keydown',
        handleTab
      );
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow">
      <div
        className={`max-w-6xl mx-auto px-4 md:transition-all md:duration-500 ${atTop && activeAnimationHeader ? 'py-6' : 'py-4'}`}
      >
        <div
          className={`w-full md:transition-all md:duration-500 ${atTop && activeAnimationHeader ? 'flex flex-col items-center' : 'flex items-center justify-between'}`}
        >
          {/* Logo */}
          <div className="logo md:transition-all md:duration-500">
            <a href="/" aria-label="Inicio">
              <img
                src="/assets/img/logo-rectangular-blanco.png"
                alt="Moto Sport La Roca"
                className={`${atTop && activeAnimationHeader ? 'h-20 md:transition-all md:duration-500 mx-auto' : 'h-10 md:transition-all md:duration-500'}  `}
              />
            </a>
          </div>

          {/* Desktop nav: centered below logo when atTop, inline when scrolled */}
          <nav
            className={`hidden md:flex items-center gap-8 md:transition-all md:duration-500 ${atTop && activeAnimationHeader ? 'md:justify-center md:mt-4' : ''}`}
            aria-label="Main navigation"
          >
            <a
              className="text-white font-extrabold uppercase text-sm flex items-center"
              href="#top"
              onClick={(e) =>
                handleNavClick(e, 'top')
              }
            >
              <span
                className={`${activeLink === 'top' ? 'opacity-100' : 'opacity-0'} ml-2 w-2 h-2 rounded-full bg-rocred inline-block`}
                aria-hidden
              ></span>{' '}
              INICIO
            </a>
            <a
              className="text-white font-extrabold uppercase text-sm"
              href="#about"
              onClick={(e) =>
                handleNavClick(e, 'about')
              }
            >
              <span
                className={`${activeLink === 'about' ? 'opacity-100' : 'opacity-0'} ml-2 w-2 h-2 rounded-full bg-rocred inline-block`}
                aria-hidden
              ></span>
              {'  '}
              NOSOTROS
            </a>
            <a
              className="text-white font-extrabold uppercase text-sm"
              href="#history"
              onClick={(e) =>
                handleNavClick(e, 'history')
              }
            >
              <span
                className={`${activeLink === 'history' ? 'opacity-100' : 'opacity-0'} ml-2 w-2 h-2 rounded-full bg-rocred inline-block`}
                aria-hidden
              ></span>
              {'  '}
              HISTORIA
            </a>
            <a
              className="text-white font-extrabold uppercase text-sm"
              href="#events"
              onClick={(e) =>
                handleNavClick(e, 'events')
              }
            >
              <span
                className={`${activeLink === 'events' ? 'opacity-100' : 'opacity-0'} ml-2 w-2 h-2 rounded-full bg-rocred inline-block`}
                aria-hidden
              ></span>
              {'  '}
              Noticias
            </a>
            <a
              className="text-white font-extrabold uppercase text-sm"
              href="#brands"
              onClick={(e) =>
                handleNavClick(e, 'brands')
              }
            >
              <span
                className={`${activeLink === 'brands' ? 'opacity-100' : 'opacity-0'} ml-2 w-2 h-2 rounded-full bg-rocred inline-block`}
                aria-hidden
              ></span>
              {'  '}
              MARCAS
            </a>
            <a
              className="text-white font-extrabold uppercase text-sm"
              href="#stores"
              onClick={(e) =>
                handleNavClick(e, 'stores')
              }
            >
              <span
                className={`${activeLink === 'stores' ? 'opacity-100' : 'opacity-0'} ml-2 w-2 h-2 rounded-full bg-rocred inline-block`}
                aria-hidden
              ></span>
              {'  '}
              TIENDAS
            </a>
            <a
              className="text-white font-extrabold uppercase text-sm"
              href="#contact"
              onClick={(e) =>
                handleNavClick(e, 'contact')
              }
            >
              <span
                className={`${activeLink === 'contact' ? 'opacity-100' : 'opacity-0'} ml-2 w-2 h-2 rounded-full bg-rocred inline-block`}
                aria-hidden
              ></span>
              {'  '}
              CONTACTOS
            </a>
          </nav>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label={
                open
                  ? 'Cerrar menú'
                  : 'Abrir menú'
              }
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer - always in DOM for smooth transitions */}
      <div
        className={`fixed inset-0 z-60 md:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
      >
        {/* backdrop */}
        <div
          className={`absolute inset-0 bg-black ${open ? 'opacity-60 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setOpen(false)}
          aria-hidden
        />

        <aside
          className={`absolute right-0 top-0 h-full w-full bg-black text-white shadow-lg ${open ? 'translate-x-0' : 'translate-x-full'}`}
          aria-hidden={!open}
        >
          <nav
            id="mobile-menu"
            className="flex flex-col p-6 gap-4"
            aria-label="Mobile navigation"
          >
            <a
              ref={firstLinkRef}
              href="#top"
              className="font-bold uppercase text-lg block w-full text-left py-2"
              onClick={(e) =>
                handleNavClick(e, 'top')
              }
            >
              Inicio
            </a>
            <a
              href="#about"
              className="font-bold uppercase text-lg block w-full text-left py-2"
              onClick={(e) =>
                handleNavClick(e, 'about')
              }
            >
              Nosotros
            </a>
            <a
              href="#history"
              className="font-bold uppercase text-lg block w-full text-left py-2"
              onClick={(e) =>
                handleNavClick(e, 'history')
              }
            >
              Historia
            </a>
            <a
              href="#events"
              className="font-bold uppercase text-lg block w-full text-left py-2"
              onClick={(e) =>
                handleNavClick(e, 'events')
              }
            >
              Noticias
            </a>
            <a
              href="#brands"
              className="font-bold uppercase text-lg block w-full text-left py-2"
              onClick={(e) =>
                handleNavClick(e, 'brands')
              }
            >
              Marcas
            </a>
            <a
              href="#stores"
              className="font-bold uppercase text-lg block w-full text-left py-2"
              onClick={(e) =>
                handleNavClick(e, 'stores')
              }
            >
              Tiendas
            </a>
            <a
              href="#contact"
              className="font-bold uppercase text-lg block w-full text-left py-2"
              onClick={(e) =>
                handleNavClick(e, 'contact')
              }
            >
              Contactos
            </a>
          </nav>
        </aside>
      </div>
    </header>
  );
}
