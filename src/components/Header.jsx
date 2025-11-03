import React, { useEffect, useRef, useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const firstLinkRef = useRef(null)
  
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }

    function handleTab(e) {
      if (!open) return
      const drawer = document.getElementById('mobile-menu')
      if (!drawer) return
      const focusable = Array.from(
        drawer.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])')
      ).filter((el) => !el.hasAttribute('disabled'))
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    }

    if (open) {
      document.addEventListener('keydown', onKey)
      document.addEventListener('keydown', handleTab)
      document.body.style.overflow = 'hidden'
      setTimeout(() => firstLinkRef.current?.focus(), 20)
    } else {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('keydown', handleTab)
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('keydown', handleTab)
      document.body.style.overflow = ''
    }
  }, [open])



  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-4">
        <div className="logo">
          <a href="/" aria-label="Inicio">
            <img src="/assets/img/logo-blanco.png" alt="Moto Sport La Roca" className="h-10 md:h-12" />
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <a className="text-white font-extrabold uppercase text-sm flex items-center" href="#">INICIO <span className="ml-2 w-2 h-2 rounded-full bg-rocred inline-block" aria-hidden></span></a>
          <a className="text-white font-extrabold uppercase text-sm" href="#about">NOSOTROS</a>
          <a className="text-white font-extrabold uppercase text-sm" href="#brands">MARCAS</a>
          <a className="text-white font-extrabold uppercase text-sm" href="#contact">CONTACTOS</a>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-white "
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {/* Mobile Drawer - always in DOM for smooth transitions */}
  <div className={`fixed inset-0 z-60 md:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} role="dialog" aria-modal={open} aria-hidden={!open}>
        {/* backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${open ? 'opacity-60 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setOpen(false)}
          aria-hidden
        />

        <aside
          className={`absolute right-0 top-0 h-full w-full bg-black text-white shadow-lg transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
          aria-hidden={!open}
        >
          <nav id="mobile-menu" className="flex flex-col p-6 gap-4" aria-label="Mobile navigation">
            <a ref={firstLinkRef} href="#" className="font-bold uppercase text-lg block w-full text-left py-2" onClick={() => setOpen(false)}>Inicio</a>
            <a href="#about" className="font-bold uppercase text-lg block w-full text-left py-2" onClick={() => setOpen(false)}>Nosotros</a>
            <a href="#brands" className="font-bold uppercase text-lg block w-full text-left py-2" onClick={() => setOpen(false)}>Marcas</a>
            <a href="#contact" className="font-bold uppercase text-lg block w-full text-left py-2" onClick={() => setOpen(false)}>Contactos</a>
          </nav>
        </aside>
      </div>
    </header>
  )
}
