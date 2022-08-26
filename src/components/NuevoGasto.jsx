import { useState, useEffect } from "react";
import Error from "../img/exclamacion.svg";
const NuevoGasto = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gasto,
  setGasto
}) => {
  const [nombre, setNombre] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategorai] = useState("");
  const [fecha, setFecha] = useState('')
  const [id,setId] = useState('')
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(gasto).length > 0) {
      setNombre(gasto.nombre)
      setValor(gasto.valor)
      setCategorai(gasto.categoria)
      setId(gasto.id)
      setFecha(gasto.fecha)
    }
  }, []);

  const handleModal = () => {
    setGasto({})
    setAnimarModal(true);
    setTimeout(() => {
      setModal(false);
      setTimeout(() => {
        setAnimarModal(false);
      }, 100);
    }, 200);
  };

  const handleGasto = (e) => {
    e.preventDefault();

    if ([nombre, valor, categoria].includes("")) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }

    guardarGasto({ nombre, valor, categoria, id, fecha});
  };

  return (
    <div className="bg-gray-800/50 fixed top-0 left-0 bottom-0 right-0">
      <div
        className={`w-full  flex justify-center mt-20 animate-Abajo  ${
          animarModal ? "animate-eAbajo" : ""
        }`}
      >
        <div className="bg-[#191D24] w-2/5 p-5 rounded-lg shadow-lg shadow-[#191D24]">
          <h2 className="text-4xl text-white font-black text-center">
            {gasto.nombre ? 'Editar Gasto' : 'Nuevo gasto'}
          </h2>
          <form className="mt-5" onSubmit={handleGasto}>
            <div className="mb-5">
              <label htmlFor="" className="text-white font-semibold">
                Nombre del Gasto
              </label>
              <input
                type="text"
                className="w-full px-8 py-3 rounded-xl bg-gray-700 text-center text-white"
                placeholder="Nombre del gasto Ej: Transporte, Comida...etc"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <label htmlFor="" className="text-white font-semibold">
              Valor del Gasto
            </label>
            <input
              type="number"
              className="w-full px-8 py-3 rounded-xl bg-gray-700 text-center text-white"
              placeholder="Valor del gasto Ej: 300.000"
              value={valor}
              onChange={(e) => setValor(Number(e.target.value))}
            />
            <div className="mt-5 mb-3">
              <label htmlFor="" className="text-white font-semibold">
                Categoria del Gasto
              </label>
              <select
                value={categoria}
                onChange={(e) => setCategorai(e.target.value)}
                className="bg-gray-700 text-white w-full px-8 py-3 mt-3 rounded-md"
              >
                <option value="">
                  --- Seleccione una categoria del gasto ----
                </option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="gastos">Gastos varios</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">Suscripciones</option>
              </select>
            </div>
            {error && (
              <div className="w-full mt-5 mx-8 flex ">
                <img src={Error} alt="" />
                <h3 className="text-red-600 font-bold tracking-wider text-xl text-center ml-3">
                  Todos los campos son obligatorios
                </h3>
              </div>
            )}
            <div className="flex">
              <input
                onClick={handleModal}
                value="Cancelar"
                className="text-center mt-5 mr-3 w-full bg-red-600 p-3 rounded-lg font-bold text-white uppercase cursor-pointer hover:bg-red-700 transition-colors"
              />

              <input
                type="submit"
                value={gasto.nombre ? 'Editar gasto' : 'Guardar gasto'}
                className="mt-5 w-full bg-[#6419E6] p-3 rounded-lg font-bold text-white uppercase cursor-pointer hover:bg-[#4913a5] transition-colors"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NuevoGasto;
