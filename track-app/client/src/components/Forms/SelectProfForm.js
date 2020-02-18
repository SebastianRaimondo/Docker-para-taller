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

  prueba() {
    return "zaearawr5555555555555r";
  }

  render() {
    //  this.llenarArray();
    const storeOptions = this.state.profesDelCurso.map(prof => {
      return {
        value: prof._id,
        display: prof.nombre + " " + prof.apellido
      };
    });
    console.log(this.estaAsignado(this.props.idAlum));
    console.log(this.state.profSelected);
    console.log(storeOptions);
    console.log(this.state.dataAsig);
    console.log(this.props.idAlum);
    console.log(this.state.alumnosConAsignacion);
    console.log(this.state.dataAsignacionesCompletas);
    console.log(this.state.profesDelCurso);

    return (
      <Form>
        <FormGroup>
          <div>
            <Label>{this.prueba()}</Label>
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
