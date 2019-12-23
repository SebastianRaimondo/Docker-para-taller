import React from "react";
import { Table } from "reactstrap";
import AlumnoRow from "../Rows/AlumnoRow";
import api from "../api/apiRar";
import NuevoAlumno from "../Collapses/NuevoAlumno";

export default class AlumnoBrowser extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  add() {
    api.getAlumumnos().then(res => this.setState({ data: res.data }));
  }

  del(id) {
    api.deleteAlu(id, () =>
      api.getAlumumnos().then(res => this.setState({ data: res.data }))
    );
  }

  componentDidMount() {
    api.getAlumumnos().then(res => this.setState({ data: res.data }));
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <div className="row">
          <NuevoAlumno addFn={() => this.add()} />
        </div>

        <div className="row">
          <Table striped>
            <thead>
              <tr>
                <div className="row">
                  <div className="col-1">
                    <th>Nombre</th>
                  </div>
                  <div className="col-1">
                    <th>Apellido</th>
                  </div>
                  <div className="col-2">
                    <th>Email</th>
                  </div>
                  <div className="col-1">
                    <th>Legajo</th>
                  </div>
                  <div className="col-2">
                    <th>Git</th>
                  </div>
                  <div className="col-3">
                    <th>Acciones</th>
                  </div>
                </div>
              </tr>
            </thead>
            {data.map((alu, idx) => (
              <AlumnoRow
                key={idx}
                indice={idx}
                nombre={alu.nombre}
                apellido={alu.apellido}
                nLegajo={alu.nLegajo}
                email={alu.email}
                userGit={alu.userGit}
                id={alu._id}
                cb={id => this.del(id)}
                cbAdd={id => this.add()}
              />
            ))}
          </Table>
        </div>
      </div>
    );
  }
}
