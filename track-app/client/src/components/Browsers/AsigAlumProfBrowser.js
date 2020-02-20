import React from "react";
import { Table } from "reactstrap";
import api from "../api/apiRar";
import AsigProfAluRow from "../Rows/AsigProfAluRow";

export default class AsigAlumProfBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAlu: props.dataAlu,
      dataProf: props.dataProf,
      dataAsignacionesCompletas: []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ dataAlu: nextProps.dataAlu, dataProf: nextProps.dataProf });
  }

  componentDidMount() {
    api
      .getAsignaciones()
      .then(res => this.setState({ dataAsignacionesCompletas: res.data }));
  }

  filtrarAsinaciones() {
    return this.state.dataAsignacionesCompletas.filter(
      a => a.asignacion.profesor !== null && a.asignacion.alumno !== null
    );
  }

  actualizarAsignaciones() {
    api
      .getAsignaciones()
      .then(res => this.setState({ dataAsignacionesCompletas: res.data }));
  }

  render() {
    const { dataAlu } = this.state;
    const { dataProf } = this.state;
    //  const { dataAsignaciones } = this.state;

    console.log(dataProf);
    console.log(dataAlu);
    console.log(this.filtrarAsinaciones());
    console.log(this.props);
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
                    <th>Asignado al profesor</th>{" "}
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
                asignaciones={this.filtrarAsinaciones()}
                profesores={this.state.dataProf}
                actualizarAsig={f => this.actualizarAsignaciones()}
              />
            ))}
          </Table>
        </div>
      </div>
    );
  }
}
