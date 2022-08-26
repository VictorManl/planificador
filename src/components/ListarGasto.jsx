import Gasto from "./Gasto";

const ListarGasto = ({
  gastos,
  setGasto,
  eliminarGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className="mt-8">
      <div className="flex justify-center items-center flex-col">
        {filtro ? (
          <>
            <h2 className="text-white text-4xl font-black text-center mb-5">
              {gastosFiltrados.length
                ? `Listado de gastos por filtro: ${filtro}`
                : `Aun no hay un gasto por este filtro: ${filtro}`}
            </h2>
            {gastosFiltrados.map((gasto) => (
              <Gasto
                key={gasto.id}
                gasto={gasto}
                setGasto={setGasto}
                eliminarGasto={eliminarGasto}
              />
            ))}
          </>
        ) : (
          <>
          <h2 className="text-white text-4xl font-black text-center mb-5">
              {gastos.length
                ? 'Listado de gastos'
                : 'Aun no hay un gasto'}
            </h2>
            {gastos.map((gasto) => (
              <Gasto
                key={gasto.id}
                gasto={gasto}
                setGasto={setGasto}
                eliminarGasto={eliminarGasto}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ListarGasto;
