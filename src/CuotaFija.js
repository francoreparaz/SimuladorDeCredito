import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import swal from "sweetalert";
import "./CuotaFija.css";
function CuotaFija({ cuotaFija, changeCuotaFija,cuotas}) {
  {
    changeCuotaFija();
  }
  return (
    <div>
      <div className="cuotaBox">
        <p className="letra">
          <strong>CUOTA FIJA POR MES</strong>
        </p>
        <h1 className="numero">${cuotaFija}</h1>
      </div>

      <div className="Buttons">
        <Button
          variant="outline-primary"
          className="Button1"
          onClick={() =>
            swal({
                title: ` ESTAS SEGURO QUE QUIERES ACCEDER AL CREDITO?` ,
                text: "Si es correcto,presiona ok",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal(`  CREDITO CEDIDO POR ${cuotas} Cuotas`, {
                    icon: "success",
                  });
                } else {
                  swal("EL CREDITO FUE CANCELADO");
                }
              })
          }
        >
          <strong>OBTENÉ TU CREDITO</strong>
        </Button>{" "}
        <Button 
        variant="outline-primary" 
        className="Button2" onClick={()=>  swal((`CUOTAS ESTABLECIDAs : ${cuotas}`))}>
          <strong>VER DETALLE DE COUTAS</strong>
        </Button>{" "}
      </div>
    </div>
  );
}

export default CuotaFija;
