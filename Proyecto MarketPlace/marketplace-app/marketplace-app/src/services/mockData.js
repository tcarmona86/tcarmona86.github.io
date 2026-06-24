/**
 * mockData.js
 * Datos de prueba para desarrollar el frontend sin depender de un backend real.
 * Cuando tengas tu API lista, basta con cambiar USE_MOCK=false en productService.js
 * (o la variable de entorno VITE_USE_MOCK) y todo seguirá funcionando igual,
 * porque la forma de los datos es la misma que se espera de la API real.
 */

export const mockCategories = [
  { id: 1, name: "Tecnología" },
  { id: 2, name: "Hogar" },
  { id: 3, name: "Moda" },
  { id: 4, name: "Deportes" },
  { id: 5, name: "Juguetes" },
  { id: 6, name: "Belleza" },
];

export const mockProducts = [
  {
    id: 1,
    name: "Audífonos Bluetooth Inalámbricos con Cancelación de Ruido",
    price: 29990,
    categoryId: 1,
    imageUrl: "https://picsum.photos/seed/auriculares/300/300",
    description:
      "Audífonos inalámbricos con cancelación activa de ruido, 30 horas de batería y resistencia al agua IPX4.",
    stock: 15,
  },
  {
    id: 2,
    name: "Zapatillas Urbanas Running",
    price: 45990,
    categoryId: 4,
    imageUrl: "https://picsum.photos/seed/zapatillas/300/300",
    description: "Zapatillas livianas para running, suela de alto retorno de energía.",
    stock: 8,
  },
  {
    id: 3,
    name: "Set de Ollas Antiadherentes (5 piezas)",
    price: 39990,
    categoryId: 2,
    imageUrl: "https://picsum.photos/seed/ollas/300/300",
    description: "Set de 5 ollas con recubrimiento antiadherente, aptas para todo tipo de cocina.",
    stock: 20,
  },
  {
    id: 4,
    name: "Smartwatch Deportivo con GPS",
    price: 59990,
    categoryId: 1,
    imageUrl: "https://picsum.photos/seed/smartwatch/300/300",
    description: "Reloj inteligente con GPS, monitor cardíaco y resistencia al agua 5ATM.",
    stock: 12,
  },
  {
    id: 5,
    name: "Mochila Antirrobo para Notebook",
    price: 24990,
    categoryId: 3,
    imageUrl: "https://picsum.photos/seed/mochila/300/300",
    description: "Mochila con puerto USB, compartimento para notebook de hasta 15.6'' y diseño antirrobo.",
    stock: 25,
  },
  {
    id: 6,
    name: "Set de Maquillaje Profesional",
    price: 18990,
    categoryId: 6,
    imageUrl: "https://picsum.photos/seed/maquillaje/300/300",
    description: "Set completo de maquillaje profesional con paleta de sombras y brochas.",
    stock: 30,
  },
  {
    id: 7,
    name: "Pelota de Fútbol Profesional N°5",
    price: 15990,
    categoryId: 4,
    imageUrl: "https://picsum.photos/seed/pelota/300/300",
    description: "Pelota oficial N°5, cosida a mano, ideal para uso profesional y amateur.",
    stock: 40,
  },
  {
    id: 8,
    name: "Auto a Control Remoto 4x4",
    price: 27990,
    categoryId: 5,
    imageUrl: "https://picsum.photos/seed/autorc/300/300",
    description: "Auto a control remoto todo terreno, batería recargable incluida.",
    stock: 10,
  },
];

/**
 * Simula la latencia de una llamada real a la API, para que loading states
 * (spinners) se comporten igual que con un backend real.
 */
export function delay(data, ms = 500) {
  return new Promise((resolve) => setTimeout(() => resolve({ data }), ms));
}
