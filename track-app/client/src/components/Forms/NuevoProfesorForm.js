import React from "react";
import { Form, FormGroup, Label, Input, Button, ButtonGroup } from "reactstrap";
import api from "../api/apiRar";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export default class NuevoProfesorForm extends React.Component {
  constructor(props) {
    super(props);
    this.clean = this.clean.bind(this);

    this.state = {
      nombre: "",
      apellido: ""
    };
  }

  clean() {
    this.setState(state => {
      state.nombre = "";
      state.apellido = "";
    });
    this.props.onCollapse();
  }

  accept() {
    let stateCopy = {
      nombre: this.state.nombre,
      apellido: this.state.apellido
    };
    this.clean();
    api.createProf(stateCopy, () => this.props.addFn());
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Nombre:</Label>
          <Input
            type="string"
            name="nombre"
            value={this.state.nombre}
            onChange={event => this.setState({ nombre: event.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Apellido:</Label>
          <Input
            type="string"
            name="apellido"
            value={this.state.apellido}
            onChange={event => this.setState({ apellido: event.target.value })}
          />
        </FormGroup>

        <ButtonGroup>
          <Button
            className="Edit-Button"
            color="success"
            size="sm"
            onClick={() => {
              this.accept();
            }}
          >
            <FaCheck />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button
            className="Cancell-Button"
            color="danger"
            size="sm"
            onClick={() => this.clean()}
          >
            <FaTimes />
          </Button>
        </ButtonGroup>
      </Form>
    );
  }
}
