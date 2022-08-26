export const generarId = () => {
  const random = Math.random().toString(36).substring(2);
  const fecha = Date.now().toString(36);

  return random + fecha;
};

export const convertirFecha = (fecha) => {
  const nuevaFecha = new Date(fecha);
  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return nuevaFecha.toLocaleDateString("es-ES", opciones);
};

export const formatearNumero = (numero) => {
  return numero.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
};
