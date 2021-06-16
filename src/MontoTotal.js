import React from "react";
import { Slider } from "@material-ui/core";
import "./MontoTotal.css";

function MontoTotal({ value, handleChange, letra }) {
  return (
    <div className="father">
        <div  className="padre1">

      <p className="montoTotal">MONTO TOTAL</p>
      <div className="box">
        <strong>${value}</strong>
      </div>
        </div>

      <Slider
        style={{
          width: "500px",
          heigth: "100px",
          display: "flex",
          marginLeft: "25%",
          color: "black",
          marginTop: "50px",
        }}
        min={5000}
        max={50000}
        value={value}
        step={10}
        onChange={handleChange}
        getAriaValueText={letra}
        valueLabelDisplay="auto"
      />

      <div className="mm">
        <p className="min"><strong>$ 5.000</strong></p>
        <p className="max"><strong>$ 50.000</strong></p>
      </div>
    </div>
  );
}

export default MontoTotal;
