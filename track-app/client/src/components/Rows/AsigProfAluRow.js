import React, { Component } from "react";
import SelectProfForm from "../Forms/SelectProfForm";

import {} from "react-icons/fa";

class AsigProfAluRow extends Component {
  render() {
    return (
      <tbody>
        <tr key={this.props.indice}>
          <div className="row">
            <div className="col-8">
              <td id="nombre">
                {this.props.nombre} {this.props.apellido}
              </td>
            </div>

            <div className="col-4">
              <td>
                <SelectProfForm
                  idCurso={this.props.idCurso}
                  idAlum={this.props.idAlu}
                  asignaciones={this.props.asignaciones}
                  profesores={this.props.profesores}
                  actualizarAsig={this.props.actualizarAsig}
                />
              </td>
            </div>
          </div>
        </tr>
      </tbody>
    );
  }
}
export default AsigProfAluRow;
