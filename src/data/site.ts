/**
 * Datos generales del negocio. Lo que está entre [CORCHETES] es un marcador
 * pendiente de confirmar (ver PENDIENTES.md).
 */
export const site = {
  name: 'Imperial Gym',
  /** Titular de la portada (tomado de su pieza del Plan Ultra; pendiente de aprobación). */
  tagline: 'Entrena donde quieras, cuando quieras',
  city: 'Armenia',
  region: 'Quindío',
  country: 'Colombia',
  /**
   * Número de WhatsApp general: solo dígitos, con indicativo 57 (ej. "573001234567").
   * null mientras no se confirme: los enlaces abren WhatsApp sin destinatario.
   */
  whatsapp: null as string | null,
  whatsappLabel: '[NÚMERO WHATSAPP]',
  instagram: {
    handle: '[@USUARIO]',
    /** URL del perfil, ej. "https://www.instagram.com/usuario/". null mientras no se confirme. */
    url: null as string | null,
  },
};

/** Mensajes prellenados de WhatsApp según el contexto. */
export const whatsappMessages = {
  general: 'Hola, quiero información sobre Imperial Gym.',
  visit: 'Hola, quiero agendar una visita a Imperial Gym.',
  plan: (plan: string) => `Hola, me interesa el ${plan}. ¿Cómo me inscribo?`,
  class: (name: string, location: string, day: string, time: string) =>
    `Hola, quiero ir a la clase de ${name} en la Sede ${location} (${day}, ${time}).`,
  location: (location: string) => `Hola, tengo una pregunta sobre la Sede ${location}.`,
  merch: 'Hola, quiero pedir un bolso de Imperial Gym. ¿Qué precio tiene y cómo lo compro?',
};
