import Gasto from "./Gasto";

const ListarGasto = ({ gastos,setGasto, eliminarGasto }) => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-white text-4xl font-black text-center mb-5">
        Listado de gastos
      </h2>
      <div className="flex justify-center items-center flex-col">
        {gastos.length ? (
          gastos.map((gasto) => <Gasto key={gasto.id} gasto={gasto} setGasto={setGasto} eliminarGasto={eliminarGasto}/>)
        ) : (
          <div className="bg-[#191D24] px-14 py-8 rounded-lg shadow-lg shadow-gray-800 w-3/5 2xl:w-2/4 text-white">
            <h2 className="font-bold text-xl text-white text-center">
              Aun no hay gastos
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListarGasto;
