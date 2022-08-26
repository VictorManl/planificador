import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { formatearNumero } from "../helpers";

const ControlPresupuesto = ({ presupuesto, gastos , setGastos, setPresupuesto,setIsValid}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);


  const handleReset = () => {
    const resultado = confirm('Deseas reiniciar le presupuesto y el gasto')

    if(resultado){
      setGastos([])
      setPresupuesto(0)
      setIsValid(false)
    }
  }

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
        <div className=" w-64 h-64 flex flex-1 ">
          <CircularProgressbar
            styles={buildStyles({
              pathColor: porcentaje > 100 ? '#DC2626' : '#6419E6',
              trailColor: "#2A303C",
              textSize: 10,
              textColor : porcentaje > 100 ? '#DC2626' : '#6419E6',
            })}
            value={porcentaje}
            text={`${porcentaje}% Gastado`}
          />
        </div>
        <div className="flex-1">
          <div className="mt-5 px-10">
            <button type="button" onClick={handleReset} className="w-full rounded-lg shadow-lg shadow-[#6419E6] mb-10 bg-[#6419E6] p-3 text-white font-bold text-xl">Resetear app</button>
            <h3 className="text-[#6419E6] font-extrabold text-xl mb-2">
              Presupuesto: {' '}
              <span className="text-white font-semibold">
                {formatearNumero(presupuesto)}
              </span>
            </h3>
            <h3 className={`${disponible < 0 ? 'text-red-600' : 'text-[#6419E6]'} font-extrabold text-xl mb-2`}>
              Disponible: {' '} 
              <span className="{`${disponible < 0 ? 'text-red-600' : 'text-[#6419E6]'} font-semibold`}">
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
