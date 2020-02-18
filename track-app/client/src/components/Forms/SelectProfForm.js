import React from "react";
import { Form, FormGroup, Input, ButtonGroup, Label } from "reactstrap";
import api from "../api/apiRar";

export default class SelectProfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      profesDelCurso: [],
      profSelected: [],
      alumnosConAsignacion: [],
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

  estaAsignado(id) {
    return this.state.alumnosConAsignacion.includes(id);
  }

  getAsignacionDelAlumno(idAlumno) {
    return this.state.dataAsignacionesCompletas.filter(
      a => a.asignacion.alumno._id === idAlumno
    );
  }

  nombreYApellidoProfesor(idAlumno) {
    return this.getAsignacionDelAlumno(idAlumno).map(
      a => a.asignacion.profesor.nombre + " " + a.asignacion.profesor.apellido
    );
  }

  asignacionDeProfesor() {
    if (this.estaAsignado(this.props.idAlum)) {
      return this.nombreYApellidoProfesor(this.props.idAlum);
    } else {
      return "Aun no asignado";
    }
  }
  llenarArrayAlumnosConAsignacion() {
    this.state.dataAsignacionesCompletas.map(a =>
      this.state.alumnosConAsignacion.push(a.asignacion.alumno._id)
    );
  }

  render() {
    this.llenarArrayAlumnosConAsignacion();
    const storeOptions = this.state.profesDelCurso.map(prof => {
      return {
        value: prof._id,
        display: prof.nombre + " " + prof.apellido
      };
    });
    console.log(this.estaAsignado(this.props.idAlum));
    console.log(this.state.profSelected);
    console.log(storeOptions);
    console.log(this.props.idAlum);
    console.log(this.state.alumnosConAsignacion);
    console.log(this.state.dataAsignacionesCompletas);
    console.log(this.state.profesDelCurso);
    console.log(this.getAsignacionDelAlumno("5e46d1305e6166052c4fba39"));
    console.log(this.nombreYApellidoProfesor("5e46d1305e6166052c4fba39"));

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
