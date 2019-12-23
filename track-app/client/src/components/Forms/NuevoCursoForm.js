import React from "react";
import { Form, FormGroup, Label, Input, Button, ButtonGroup } from "reactstrap";
import api from "../api/apiRar";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export default class NuevoCursoForm extends React.Component {
  constructor(props) {
    super(props);
    this.clean = this.clean.bind(this);
    this.state = {
      materia: "",
      sede: "",
      dias: "",
      cuatrimestre: "",
      anio: ""
    };
  }

  clean() {
    this.setState(state => {
      state.materia = "";
      state.sede = "";
      state.dias = "";
      state.cuatrimestre = "";
      state.anio = "";
    });
    this.props.onCollapse();
  }

  accept() {
    let stateCopy = {
      materia: this.state.materia,
      sede: this.state.sede,
      dias: this.state.dias,
      cuatrimestre: this.state.cuatrimestre,
      anio: this.state.anio
    };
    this.clean();
    api.createCurso(stateCopy, () => this.props.addFn());
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
