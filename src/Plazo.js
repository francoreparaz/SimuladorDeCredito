import React from "react";
import { Slider } from "@material-ui/core";
import "./Plazo.css";
function Plazo({ letraCuota, handleChange, cuotas }) {
  return (
    <div className="padre">
      <div className="padre1">
        <p className="Plazo">PLAZO</p>
        <div className="box2">
          <strong>{cuotas}</strong>
        </div>
      </div>
      <Slider
        style={{
          width: "500px",
          heigth: "100px",
          display: "flex",
          marginLeft: "25%",
          color: "black",
          marginTop: "15px",
        }}
        min={3}
        max={24}
        value={cuotas}
        onChange={handleChange}
        getAriaValueText={letraCuota}
        valueLabelDisplay="auto"
      />
      <div className="mm">
        <p className="minimo"><strong>3</strong></p>
        <p className="maximo"><strong>24</strong></p>
      </div>
    </div>
  );
}

export default Plazo;
