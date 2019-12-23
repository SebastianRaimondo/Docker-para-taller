import React from "react";
import { Form, FormGroup, Input, ButtonGroup } from "reactstrap";
import api from "../api/apiRar";

export default class SelectProfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      profSelected: [],
      options: []
    };
  }

  componentDidMount() {
    api
      .getCursoCompleto(this.props.idCurso)
      .then(res => this.setState({ data: res.data.profesores }));
  }

  render() {
    const store = this.state.data.map(prof => {
      return {
        value: prof._id,
        display: prof.nombre + " " + prof.apellido
      };
    });
    console.log(this.state.profSelected);
    console.log(store);
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
                  {prof.display}
                </option>
              ))}
            </Input>
          </ButtonGroup>
        </FormGroup>
      </Form>
    );
  }
}
