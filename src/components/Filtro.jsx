import { useState } from "react"

const Filtro = ({ filtro, setFiltro }) => {
  return (
    
    <div className="bg-[#191D24] px-6 py-8 rounded-lg shadow-lg shadow-gray-800 mt-8  text-white mb-5">
        <form>
            <div>
                <h2 className="text-center font-bold text-2xl w-full">Filtrar gastos</h2>
                <select
                select={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                className="bg-gray-700 text-white w-full px-8 py-3 mt-3 rounded-md"
              >
                <option value="">
                  --- Todas las categorias ----
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
        </form>
    </div>
  )
}

export default Filtro