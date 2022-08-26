const Presupuesto = ({ 
  presupuesto, 
  setPresupuesto,
  setIsValid, 
  setError,
  setAnimarError,
}) => {

 

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(presupuesto === '' || presupuesto <= 0){
      setError(true)
      setTimeout(() => {  
        setAnimarError(true)
        setTimeout(() =>{
          setError(false)
        },200)
      },2000)
      setAnimarError(false)
      return
    }
    
    setIsValid(true)
  }

  return (
    <div className="bg-[#191D24] px-14 py-8 rounded-lg shadow-lg shadow-[#191D24]">
      <h2 className="text-white text-3xl font-semibold text-center">
        Definir Presupuesto
      </h2>
      <form onSubmit={handleSubmit}  className="mt-5">
        <input 
          type="number" 
          className="w-full px-8 py-3 rounded-xl bg-gray-700 text-center text-white"
          placeholder="Ingrese el presupuesto Ej: 1.000.000"
          value={presupuesto}
          onChange={(e) => setPresupuesto(Number(e.target.value))}
        />
        <input 
          type="submit" 
          value='Asignar'
          className="mt-5 w-full bg-[#6419E6] p-3 rounded-lg font-bold text-white uppercase cursor-pointer hover:bg-[#4913a5] transition-colors"  
        />
      </form>
  </div>
  )
}

export default Presupuesto  