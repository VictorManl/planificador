import { useState } from "react";
import ControlPresupuesto from "./ControlPresupuesto";

import Presupuesto from "./Presupuesto";

const Header = ({ isValid, setIsValid, error, setError, animarError, setAnimarError, gastos, presupuesto, setPresupuesto }) => {

  return (
    <>
      <div className="flex justify-center items-center flex-col ">
        {error && (
          <div
            className={`fixed top-10 right-10 bg-[#191D24] p-4 shadow-md shadow-[#191D24] rounded-md animate-Derecha  ${
              animarError ? "animate-eDerecha" : " "
            }`}
          >
            <h2 className="uppercase text-[#F43F18] font-bold mb-2 text-xl">
              Error
            </h2>
            <p className="text-white font-semibold">
              {presupuesto} No es un presupuesto valido
            </p>
          </div>
        )}
        <h1 className="text-white text-4xl font-black py-10">
          Planificador de gastos
        </h1>
        <div className="w-3/4 2xl:w-2/4">
          {isValid ? (
            <ControlPresupuesto
              presupuesto={presupuesto}
              gastos={gastos}
            />
          ) : (
            <Presupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              setIsValid={setIsValid}
              setError={setError}
              setAnimarError={setAnimarError}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
