/**
 * Planes (precios 2026). Para agregar o cambiar un plan, edita solo este archivo.
 * price: número en COP sin puntos, o null si falta confirmar.
 */
export interface Plan {
  id: string;
  name: string;
  price: number | null;
  period: string;
  featured: boolean;
  tagline?: string;
  benefits: string[];
}

export const plans: Plan[] = [
  {
    id: 'ultra',
    name: 'Plan Ultra',
    price: 120000,
    period: 'al mes',
    featured: true,
    benefits: [
      'Acceso a ambas sedes',
      'Máquinas y zona de pesas',
      'Clases grupales sin costo extra',
      'Horarios amplios',
      '4 invitados al mes (2 por sede)',
      'Apoyo de entrenador y app de rutinas',
      'Obsequio incluido',
    ],
  },
  {
    id: 'plan-2',
    name: '[NOMBRE PLAN]',
    price: null,
    period: 'al mes',
    featured: false,
    benefits: ['[BENEFICIOS]'],
  },
  {
    id: 'plan-3',
    name: '[NOMBRE PLAN]',
    price: null,
    period: 'al mes',
    featured: false,
    benefits: ['[BENEFICIOS]'],
  },
];

export const plansNote = 'Precios 2026, en pesos colombianos.';
