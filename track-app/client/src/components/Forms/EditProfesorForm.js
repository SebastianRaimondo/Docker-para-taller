import React from "react";
import { Form, FormGroup, Label, Input, Button, ButtonGroup } from "reactstrap";
import api from "../api/apiRar";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export default class EditProfesorForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      apellido: ""
    };
  }

  cancell() {
    this.props.onCollapse();
  }

  accept() {
    api.editProf(this.props.id, this.state, this.props.cbAdd);
  }

  componentWillReceiveProps() {
    api.getProf(this.props.id).then(res => {
      this.setState(res.data);
    });
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
              this.props.onCollapse();
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
            onClick={() => this.cancell()}
          >
            <FaTimes />
          </Button>
        </ButtonGroup>
      </Form>
    );
  }
}
