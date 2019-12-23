import React from "react";
import { Form, FormGroup, Label, Input, Button, ButtonGroup } from "reactstrap";
import api from "../api/apiRar";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export default class NuevoAlumnoForm extends React.Component {
  constructor(props) {
    super(props);
    this.clean = this.clean.bind(this);
    this.state = {
      nombre: "",
      apellido: "",
      nLegajo: "",
      email: "",
      userGit: ""
    };
  }

  clean() {
    this.setState(state => {
      state.nombre = "";
      state.apellido = "";
      state.nLegajo = "";
      state.email = "";
      state.userGit = "";
    });
    this.props.onCollapse();
  }

  accept() {
    let stateCopy = {
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      nLegajo: this.state.nLegajo,
      email: this.state.email,
      userGit: this.state.userGit
    };

    this.clean();

    api.createAlu(stateCopy, () => this.props.addFn());
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
        <FormGroup>
          <Label>Legajo:</Label>
          <Input
            type="number"
            name="legajo"
            value={this.state.nLegajo}
            onChange={event =>
              this.setState({ nLegajo: parseInt(event.target.value) })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label>Mail:</Label>
          <Input
            type="email"
            name="email"
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Usuario Git:</Label>
          <Input
            type="string"
            name="usuarioGit"
            value={this.state.userGit}
            onChange={event => this.setState({ userGit: event.target.value })}
          />
        </FormGroup>

        <ButtonGroup>
          <Button
            className="Edit-Button"
            size="sm"
            color="success"
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
            size="sm"
            color="danger"
            onClick={() => this.clean()}
          >
            <FaTimes />
          </Button>
        </ButtonGroup>
      </Form>
    );
  }
}
