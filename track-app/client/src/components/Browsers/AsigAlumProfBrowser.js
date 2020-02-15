import React from "react";
import { Table } from "reactstrap";
import api from "../api/apiRar";
import AsigProfAluRow from "../Rows/AsigProfAluRow";

export default class AsigAlumProfBrowser extends React.Component {
  constructor() {
    super();
    this.state = {
      dataAlu: [],
      alumnos: []
    };
  }

  componentDidMount() {
    api
      .getAlumnosDeUnCurso(this.props.idCurso)
      .then(res => this.setState({ dataAlu: res.data.alumnos }));
  }

  render() {
    const { dataAlu } = this.state;
    console.log(dataAlu);
    return (
      <div className="container">
        <div className="row">
          <Table striped>
            <thead>
              <tr>
                <div className="row">
                  <div className="col-8">
                    {" "}
                    <th>Nombre y apellido del alumno</th>
                  </div>

                  <div className="col-4">
                    {" "}
                    <th>Asignar al profesor</th>{" "}
                  </div>
                </div>
              </tr>
            </thead>
            {dataAlu.map((alu, idx) => (
              <AsigProfAluRow
                key={idx}
                indice={idx}
                nombre={alu.nombre}
                apellido={alu.apellido}
                callbackFn={id => this.delete(id)}
                cbAdd={id => this.add()}
                idCurso={this.props.idCurso}
              />
            ))}
          </Table>
        </div>
      </div>
    );
  }
}
