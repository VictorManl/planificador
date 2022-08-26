import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { formatearNumero } from "../helpers";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.valor + total,
      0
    );
    const totalDisponible = presupuesto - totalGastado;

    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1000);

    setDisponible(totalDisponible);
    setGastado(totalGastado);
  }, [gastos]);

  return (
    <div className="bg-[#191D24] px-14 py-8 rounded-lg shadow-lg shadow-gray-800">
      <h2 className="text-white text-4xl font-black text-center mb-5">
        Presupuesto
      </h2>
      <div className="flex justify-center items-center">
        <div className=" w-64 h-64 ">
          <CircularProgressbar
            styles={buildStyles({
              pathColor: "#6419E6",
              trailColor: "#2A303C",
              textSize: 10,
              textColor : "#6419E6",
            })}
            value={porcentaje}
            text={`${porcentaje}% Gastado`}
          />
        </div>
        <div className="flex-1">
          <div className="mt-5 px-10">
            <h3 className="text-[#6419E6] font-extrabold text-xl mb-2">
              Presupuesto: {' '}
              <span className="text-white font-semibold">
                {formatearNumero(presupuesto)}
              </span>
            </h3>
            <h3 className="text-[#6419E6] font-extrabold text-xl mb-2">
              Disponible: {' '} 
              <span className="text-white font-semibold">
                {formatearNumero(disponible)}
              </span>
            </h3>
            <h3 className="text-[#6419E6] font-extrabold text-xl">
              Gastado: {''}
              <span className="text-white font-semibold">
                {formatearNumero(gastado)}
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
