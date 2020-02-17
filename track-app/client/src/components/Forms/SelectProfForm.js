import React from "react";
import { Form, FormGroup, Input, ButtonGroup } from "reactstrap";
import api from "../api/apiRar";

export default class SelectProfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      dataAsig: [],
      profSelected: [],
      options: [],
      alumnosConAsignacion: []
    };
  }

  componentDidMount() {
    api
      .getCursoCompleto(this.props.idCurso)
      .then(res => this.setState({ dataAsig: res.data.asignaciones }));
  }

  llenarArray() {
    this.state.dataAsig.map(a =>
      this.state.alumnosConAsignacion.push(a.alumno._id)
    );
  }

  estaAsignado(id) {
    return this.state.alumnosConAsignacion.includes(id);
  }

  render() {
    this.llenarArray();
    const store = this.state.dataAsig.map(asig => {
      return {
        value: asig.profesor._id,
        display: asig.profesor.nombre + " " + asig.profesor.apellido,
        selected: true
      };
    });
    console.log(this.estaAsignado(this.props.idAlum));
    console.log(this.state.profSelected);
    console.log(store);
    console.log(this.state.dataAsig);
    console.log(this.props.idAlum);
    console.log(this.state.alumnosConAsignacion);

    return (
      <Form>
        <FormGroup>
          <ButtonGroup>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              value={this.state.profSelected}
              onChange={e => this.setState({ profSelected: e.target.value })}
            >
              {store.map(prof => (
                <option key={prof.value} value={prof.value}>
                  {prof.display} {prof.selected}
                </option>
              ))}
            </Input>
          </ButtonGroup>
        </FormGroup>
      </Form>
    );
  }
}
