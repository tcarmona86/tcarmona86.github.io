import api from "./api";
import { mockCategories, mockProducts, delay } from "./mockData";

/**
 * Bandera de modo mock. Por defecto en true para poder desarrollar el
 * frontend sin backend. Cuando tengas tu API real:
 *   1) Crea un archivo .env con VITE_USE_MOCK=false
 *   2) O simplemente cambia el valor por defecto de abajo a false
 * El resto de la app (componentes, hooks) NO necesita cambiar nada,
 * porque ambos modos devuelven la misma forma de respuesta: { data }.
 */
const USE_MOCK = import.meta.env.VITE_USE_MOCK !== "false";

const productService = {
  getRecommended: () =>
    USE_MOCK ? delay(mockProducts) : api.get("/products/recommended"),

  getByCategory: (categoryId, params = {}) =>
    USE_MOCK
      ? delay(mockProducts.filter((p) => String(p.categoryId) === String(categoryId)))
      : api.get(`/products/category/${categoryId}`, { params }),

  search: (query, params = {}) =>
    USE_MOCK
      ? delay(
          mockProducts.filter((p) =>
            p.name.toLowerCase().includes(String(query).toLowerCase())
          )
        )
      : api.get("/products/search", { params: { q: query, ...params } }),

  getById: (productId) =>
    USE_MOCK
      ? delay(mockProducts.find((p) => String(p.id) === String(productId)))
      : api.get(`/products/${productId}`),

  getCategories: () => (USE_MOCK ? delay(mockCategories) : api.get("/categories")),

  create: (productData) =>
    USE_MOCK
      ? delay({ id: Date.now(), ...productData })
      : api.post("/products", productData),

  update: (productId, productData) =>
    USE_MOCK
      ? delay({ id: productId, ...productData })
      : api.put(`/products/${productId}`, productData),

  remove: (productId) => (USE_MOCK ? delay({ success: true }) : api.delete(`/products/${productId}`)),
};

export default productService;
