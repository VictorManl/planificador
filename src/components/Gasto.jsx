
import { convertirFecha, formatearNumero } from "../helpers";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";

const diccionarioIconos = {
  ahorro: IconoAhorro,
  casa: IconoCasa,
  comida: IconoComida,
  gastos: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
};

const Gasto = ({ gasto , setGasto, eliminarGasto}) => {
  const { nombre, valor, categoria, fecha, id } = gasto;

  const leadingActions = () =>(
    <LeadingActions>
        <SwipeAction onClick={() => setGasto(gasto)}>
            Editar
        </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => eliminarGasto(id)}
      >
        Borrar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}

      >
        <div className="bg-[#191D24] px-6 py-8 rounded-lg shadow-lg shadow-gray-800 w-2/5 2xl:w-3/5 text-white mb-5 flex flex-1">
          <div className="flex flex-1 justify-center items-center">
            <img
              src={diccionarioIconos[categoria]}
              alt="icono_categoria"
              className="w-[82px] h-[82px]"
            />

            <div className="flex  flex-col flex-1 px-3">
              <p className="font-bold text-lg text-gray-400 uppercase">
                {categoria}
              </p>
              <p className="font-bold text-2xl text-white capitalize px-5 mt-2">
                {nombre}
              </p>
              <p className="font-bold text-lg text-gray-400   mt-2 ">
                {convertirFecha(fecha)}
              </p>
            </div>
            <p className="font-extrabold text-2xl">{formatearNumero(valor)}</p>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
