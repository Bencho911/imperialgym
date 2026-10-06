export type LocationId = 'centro' | 'sur';

export interface Location {
  id: LocationId;
  name: string;
  address: string;
  /** Enlace "Cómo llegar" de Google Maps. null mientras no haya dirección confirmada. */
  mapsUrl: string | null;
  /** URL de "Insertar un mapa" de Google Maps (https://www.google.com/maps/embed?pb=...). null = marcador. */
  mapEmbedUrl: string | null;
  /** WhatsApp propio de la sede (solo dígitos, con 57). null = usa el general. */
  whatsapp: string | null;
}

export const locations: Location[] = [
  {
    id: 'centro',
    name: 'Centro',
    address: '[DIRECCIÓN SEDE CENTRO]',
    mapsUrl: null,
    mapEmbedUrl: null,
    whatsapp: null,
  },
  {
    id: 'sur',
    name: 'Sur',
    address: '[DIRECCIÓN SEDE SUR]',
    mapsUrl: null,
    mapEmbedUrl: null,
    whatsapp: null,
  },
];

export const locationName = (id: LocationId) => locations.find((l) => l.id === id)?.name ?? id;
