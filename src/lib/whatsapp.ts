import { site } from '../data/site';

/**
 * Arma el enlace de WhatsApp con mensaje prellenado.
 * Usa el número de la sede si existe, si no el general. Si aún no hay número
 * confirmado, abre WhatsApp con el mensaje para que la persona elija el chat.
 */
export function whatsappUrl(message: string, phone: string | null = null): string {
  const number = phone ?? site.whatsapp;
  const text = encodeURIComponent(message);
  return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
}
