import React from "react";
import { Form, FormGroup, Label, Input, Button, ButtonGroup } from "reactstrap";
import api from "../api/apiRar";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export default class EditCursoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      materia: "",
      sede: "",
      dias: "",
      cuatrimestre: "",
      anio: ""
    };
  }

  cancell() {
    this.props.onCollapse();
  }

  accept() {
    api.editCurso(this.props.id, this.state, this.props.cbAdd);
  }

  componentWillReceiveProps() {
    api.getCurso(this.props.id).then(res => {
      this.setState(res.data);
    });
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Materia:</Label>
          <Input
            type="string"
            name="materia"
            value={this.state.materia}
            onChange={event => this.setState({ materia: event.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Sede:</Label>
          <Input
            type="string"
            name="sede"
            value={this.state.sede}
            onChange={event => this.setState({ sede: event.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Dias:</Label>
          <Input
            type="string"
            name="dias"
            value={this.state.dias}
            onChange={event => this.setState({ dias: event.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Cuatrimestre:</Label>
          <Input
            type="string"
            name="cuatrimestre"
            value={this.state.cuatrimestre}
            onChange={event =>
              this.setState({ cuatrimestre: event.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label>Año:</Label>
          <Input
            type="number"
            name="año"
            value={this.state.anio}
            onChange={event => this.setState({ anio: event.target.value })}
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
            size="sm"
            color="danger"
            onClick={() => this.cancell()}
          >
            <FaTimes />
          </Button>
        </ButtonGroup>
      </Form>
    );
  }
}
