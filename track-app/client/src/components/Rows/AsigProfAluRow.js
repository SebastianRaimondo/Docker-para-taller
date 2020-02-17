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
