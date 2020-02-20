import React from "react";
import { Form, FormGroup, Input, ButtonGroup, Button, Label } from "reactstrap";
import api from "../api/apiRar";
import { FaCheck, FaTrash } from "react-icons/fa";

export default class SelectProfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profSelected: ""
    };
  }

  getAsignacionDelAlumno() {
    return this.props.asignaciones.filter(
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

  crearAsignacion() {
    let stateCopy = {
      asignacion: {
        alumno: this.props.idAlum,
        profesor: this.state.profSelected,
        idCurso: this.props.idCurso
      }
    };

    api.createAsignacion(stateCopy, () => this.props.actualizarAsig());
  }

  idDeLaAsignacion() {
    let asig = this.getAsignacionDelAlumno()
      .map(a => a._id)
      .pop();
    return asig;
  }

  modificarAsignacion() {
    let temp = {
      asignacion: {
        alumno: this.props.idAlum,
        profesor: this.state.profSelected,
        idCurso: this.props.idCurso
      }
    };
    api.editAsignacion(this.idDeLaAsignacion(), temp, () =>
      this.props.actualizarAsig()
    );
  }

  isSelected() {
    return this.state.profSelected.length !== 0;
  }
  aceptar() {
    if (this.alumnoTieneAsignacionEnEsteCurso()) {
      this.modificarAsignacion();
    } else {
      this.crearAsignacion();
    }
  }

  elimninarAsignacion() {
    api.deleteAsignacion(this.idDeLaAsignacion(), () =>
      this.props.actualizarAsig()
    );
  }

  render() {
    const storeOptions = this.props.profesores.map(prof => {
      return {
        value: prof._id,
        display: prof.nombre + " " + prof.apellido
      };
    });

    //console.log(this.state.caca);
    //console.log(this.props);

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
                <option value="" disabled selected>
                  Elija un profesor
                </option>
                {storeOptions.map(prof => (
                  <option key={prof.value} value={prof.value}>
                    {prof.display}
                  </option>
                ))}
              </Input>

              <Button
                className="Edit-Button"
                size="sm"
                color="success"
                disabled={!this.state.profSelected}
                onClick={() => {
                  this.aceptar();
                }}
              >
                {" "}
                <FaCheck />
              </Button>
              <Button
                className="Delete-Button"
                color="danger"
                size="sm"
                onClick={() => {
                  this.elimninarAsignacion();
                }}
              >
                <FaTrash />
              </Button>
            </ButtonGroup>
          </div>
        </FormGroup>
      </Form>
    );
  }
}
