import { useState, useEffect } from "react";

/**
 * Hook genérico para ejecutar una función async (típicamente un servicio)
 * y exponer { data, loading, error }. Reutilizable en cualquier pantalla
 * que necesite cargar productos, categorías, etc.
 *
 * @param {Function} fetchFn - función async que retorna la respuesta de axios
 * @param {Array} deps - dependencias que disparan un nuevo fetch
 */
function useFetch(fetchFn, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    fetchFn()
      .then((response) => {
        if (isMounted) setData(response.data);
      })
      .catch((err) => {
        if (isMounted) setError(err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, error };
}

export default useFetch;
