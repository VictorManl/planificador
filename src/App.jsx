import { useState, useEffect } from "react";
import Header from "./components/Header";
import NuevoGasto from "./components/NuevoGasto";
import ListarGasto from "./components/ListarGasto";
import { generarId } from "./helpers";
import Add from "../src/img/Add.svg";

function App() {
  const [isValid, setIsValid] = useState(false);
  const [presupuesto, setPresupuesto] = useState(localStorage.getItem('presupuesto') ?? '')
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [error, setError] = useState(false);
  const [animarError, setAnimarError] = useState(false);
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) :  [] );
  
    const [gasto, setGasto] = useState({});

  useEffect(() => {
    if (Object.keys(gasto).length > 0) {
      setModal(true);
    }
  }, [gasto]);

  useEffect(() =>{
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() =>{
    const presupuestoLS = Number(localStorage.getItem('presupuesto') ?? 0)
    if(presupuestoLS > 0){
      setIsValid(true)
    }
  },[])

  useEffect(() =>{
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  const cerrarModal = () => {
    setAnimarModal(true);
    setTimeout(() => {
      setModal(false);
      setTimeout(() => {
        setAnimarModal(false);
      }, 100);
    }, 200);
  };

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      const gastoActualizado = gastos.map((g) =>
        g.id === gasto.id ? gasto : g
      );
      setGastos(gastoActualizado);
      setGasto({});
    } else {
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }
    cerrarModal();
  };

  const eliminarGasto = (id) => {
    const gastoActualizado = gastos.filter((g) => g.id !== id);
    setGastos(gastoActualizado);
  };

  const handleModal = () => {
    setModal(true);
    setGasto({});
  };

  return (
    <div className="">
      <Header
        isValid={isValid}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        error={error}
        gastos={gastos}
        setIsValid={setIsValid}
        setError={setError}
        animarError={animarError}
        setAnimarError={setAnimarError}
      />

      {isValid ? (
        <>
          <main className="mx-auto w-3/5">
            <ListarGasto
              gastos={gastos}
              eliminarGasto={eliminarGasto}
              setGasto={setGasto}
            />
          </main>
          <div className="bg-[#191D24] fixed right-10 bottom-10  2xl:right-20 2xl:bottom-20 rounded-full shadow-lg hover:scale-125 duration-200  shadow-[#191D24] cursor-pointer group">
            <img src={Add} alt="plus" onClick={handleModal} />
            <span className="bg-[#191D24] font-semibold group-hover:block group-hover:animate-Derecha hidden text-white absolute -top-10 -left-6 duration-200 text-sm w-28 text-center p-1 rounded-lg">
              Nuevo gasto
            </span>
          </div>
        </>
      ) : (
        ""
      )}

      {modal && (
        <NuevoGasto
          gasto={gasto}
          animarModal={animarModal}
          guardarGasto={guardarGasto}
          setGasto={setGasto}
          setModal={setModal}
          setAnimarModal={setAnimarModal}
        />
      )}
    </div>
  );
}

export default App;
