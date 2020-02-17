import React from "react";
import { Table } from "reactstrap";
import api from "../api/apiRar";
import AsigProfAluRow from "../Rows/AsigProfAluRow";

export default class AsigAlumProfBrowser extends React.Component {
  constructor() {
    super();
    this.state = {
      dataAlu: [],
      dataProf: [],
      dataAsignaciones: []
    };
  }

  componentDidMount() {
    api.getCursoCompleto(this.props.idCurso).then(res =>
      this.setState({
        dataProf: res.data.profesores,
        dataAlu: res.data.alumnos,
        dataAsignaciones: res.data.asignaciones
      })
    );
  }

  render() {
    const { dataAlu } = this.state;
    const { dataProf } = this.state;
    const { dataAsignaciones } = this.state;

    console.log(dataProf);
    console.log(dataAlu);
    console.log(dataAsignaciones);
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
                idAlu={alu._id}
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
