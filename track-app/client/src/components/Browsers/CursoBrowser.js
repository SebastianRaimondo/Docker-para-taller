import React from "react";
import { Table } from "reactstrap";
import api from "../api/apiRar";
import CursoRow from "../Rows/CursoRow";
import NuevoCurso from "../Collapses/NuevoCurso";

export default class CursoBrowser extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  delete(id) {
    api.deleteCurso(id, () =>
      api.getCursos().then(res => this.setState({ data: res.data }))
    );
  }

  add() {
    api.getCursos().then(res => this.setState({ data: res.data }));
  }

  componentDidMount() {
    api.getCursos().then(res => this.setState({ data: res.data }));
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <div className="row">
          <NuevoCurso addFn={() => this.add()} />
        </div>

        <div className="row">
          <Table striped>
            <thead>
              <tr>
                <div className="row">
                  <div className="col-1">
                    <th>Materia</th>
                  </div>
                  <div className="col-2">
                    <th>Sede</th>
                  </div>
                  <div className="col-2">
                    <th>Dias</th>
                  </div>
                  <div className="col-2">
                    <th>Cuatrimestre</th>
                  </div>
                  <div className="col-1">
                    <th>Año</th>
                  </div>
                  <div className="col-4">
                    <th>Acciones</th>
                  </div>
                </div>
              </tr>
            </thead>

            {data.map((curso, idx) => (
              <CursoRow
                key={idx}
                indice={idx}
                materia={curso.materia}
                sede={curso.sede}
                dias={curso.dias}
                cuatrimestre={curso.cuatrimestre}
                anio={curso.anio}
                id={curso._id}
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
