import React from "react";
import { Form, FormGroup, Input, ButtonGroup, Label } from "reactstrap";
import api from "../api/apiRar";

export default class SelectProfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      profesDelCurso: [],
      profSelected: "",
      dataAsignacionesCompletas: []
    };
  }

  componentDidMount() {
    api
      .getCursoCompleto(this.props.idCurso)
      .then(res => this.setState({ profesDelCurso: res.data.profesores }));

    api
      .getAsignaciones()
      .then(res => this.setState({ dataAsignacionesCompletas: res.data }));
  }

  getAsignacionDelAlumno() {
    return this.state.dataAsignacionesCompletas.filter(
      a =>
        a.asignacion.alumno._id === this.props.idAlum &&
        a.asignacion.idCurso === this.props.idCurso
    );
  }

  alumnoTieneAsignacionEnEsteCurso() {
    return this.getAsignacionDelAlumno().length !== 0;
  }

  mapNombreYApellidoProfesor() {
    return this.getAsignacionDelAlumno().map(
      a => a.asignacion.profesor.nombre + " " + a.asignacion.profesor.apellido
    );
  }

  asignacionDeProfesor() {
    if (this.alumnoTieneAsignacionEnEsteCurso()) {
      return this.mapNombreYApellidoProfesor();
    } else {
      return "Aun no asignado";
    }
  }

  render() {
    const storeOptions = this.state.profesDelCurso.map(prof => {
      return {
        value: prof._id,
        display: prof.nombre + " " + prof.apellido
      };
    });

    return (
      <Form>
        <FormGroup>
          <div>
            <Label>{this.asignacionDeProfesor()}</Label>
          </div>
          <div>
            <ButtonGroup>
              <Input
                type="select"
                name="select"
                id="exampleSelect"
                value={this.state.profSelected}
                onChange={e => this.setState({ profSelected: e.target.value })}
              >
                <option>Elija un profesor</option>
                {storeOptions.map(prof => (
                  <option key={prof.value} value={prof.value}>
                    {prof.display}
                  </option>
                ))}
              </Input>
            </ButtonGroup>
          </div>
        </FormGroup>
      </Form>
    );
  }
}
