import React from "react";
import { Table } from "reactstrap";
import ProfesorRow from "../Rows/ProfesorRow";
import api from "../api/apiRar";
import NuevoProfesor from "../Collapses/NuevoProfesor";

export default class ProfesorBrowser extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  delete(id) {
    api.deleteProf(id, () =>
      api.getProfesores().then(res => this.setState({ data: res.data }))
    );
  }

  add() {
    api.getProfesores().then(res => this.setState({ data: res.data }));
  }

  componentDidMount() {
    api.getProfesores().then(res => this.setState({ data: res.data }));
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <div className="row">
          <NuevoProfesor addFn={() => this.add()} />
        </div>

        <div className="row">
          <Table striped>
            <thead>
              <tr>
                <div className="row">
                  <div className="col-4">
                    {" "}
                    <th>Nombre</th>
                  </div>
                  <div className="col-4">
                    {" "}
                    <th>Apellido</th>
                  </div>
                  <div className="col-4">
                    {" "}
                    <th>Acciones</th>{" "}
                  </div>
                </div>
              </tr>
            </thead>
            {data.map((prof, idx) => (
              <ProfesorRow
                key={idx}
                indice={idx}
                nombre={prof.nombre}
                apellido={prof.apellido}
                id={prof._id}
                callbackFn={id => this.delete(id)}
                cbAdd={id => this.add()}
              />
            ))}
          </Table>
        </div>
      </div>
    );
  }
}
