import React, { useState } from 'react'
import "./App.css"
import MontoTotal from './MontoTotal'
import Plazo from './Plazo'
import CuotaFija from './CuotaFija'

export const App = () => {
    const[value,setValue]=useState(5000)
    const[cuotas,setCuotas]=useState(3)
    const[cuotaFija, setCuotaFija]=useState()

    const handleChange=(e,value)=>{
        setValue(value)  
    }
    const changeCuotas=(e,cuotas)=>{
     setCuotas(cuotas)
    }
    const calculate=(value * 1.9798/cuotas).toFixed(2)
    const changeCuotaFija=()=>{
     setCuotaFija(calculate)
    }

    const letra=()=>{
        <p>{` ${value}` }</p>
    }
    const letraCuota=()=>{
        <p>{`$ ${cuotas}` }</p>
      
    }
    
   
    return (
        <div className="App">
                <h1 style={{color:"white", marginTop:"15px"}}>Simulá tu crédito</h1>
                <MontoTotal value={value} handleChange={handleChange} letra={letra}/>
                <Plazo cuotas={cuotas} handleChange={changeCuotas} cuota={letraCuota} />
                <CuotaFija cuotaFija={cuotaFija} changeCuotaFija={changeCuotaFija} cuotas={cuotas}/>
             
        </div>
    )
}
export default App