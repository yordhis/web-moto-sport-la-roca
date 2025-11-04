import React from 'react';

function sanitizePhone(phone) {
  if (!phone) return '';
  // wa.me requiere formato internacional sin signos + ni separadores
  return String(phone).replace(/[^0-9]/g, '');
}

export default function WhatsAppButton({
  phone = import.meta.env.VITE_WAPP_PHONE,
  message = import.meta.env.VITE_WAPP_MSG ||
    '¡Hola! Quiero más información.',
  imgSrc = '/assets/img/whatsapp.webp',
}) {
  const num = sanitizePhone(phone);
  const href = num
    ? `https://wa.me/${num}?text=${encodeURIComponent(message)}`
    : `https://wa.me/?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-rocred/60 transition-transform hover:scale-105"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      <img
        src={imgSrc}
        alt="WhatsApp"
        className="h-14 w-14 md:h-16 md:w-16 drop-shadow-lg"
        loading="lazy"
      />
    </a>
  );
}
