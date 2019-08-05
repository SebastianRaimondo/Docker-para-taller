import React, { Component } from "react";
import { Alert,Row,Col,Container } from "reactstrap";
import DualListBox from "react-dual-listbox"
import "react-dual-listbox/lib/react-dual-listbox.css"
import "font-awesome/css/font-awesome.min.css"
import api from "../Api/apiRar";





const options = [
//  { value: "Pedro Anido", label: "Pedro Anido" },
//  { value: "Enana Flansilla", label: "Enana Flansilla" }
  
];



class KeyPad extends Component {
  state = {
    selected: [],
    data: [],
  };


 fillOptionsArray(value,label){
    options.push({value:value, label:label});
 }

  componentDidMount() {
    api.getAlumumnos().
      then(res => this.setState({ data: res.data })).
         then(()=> {this.state.data.forEach((alum) => {
           this.fillOptionsArray(alum.nombre + " " + alum.apellido,alum.nombre + " " + alum.apellido)})});
  }

  onChange = selected => {
    this.setState({ selected });
  };
  
  render() {

    const { selected } = this.state;
 
    console.log(this.state.data);
    console.log(options);
    console.log(this.state.selected);
    return (
      <div>
        <Alert color="dark">
          <Container>
            <Row>
              <Col xs="9">
         <h5>Alumnos cargados</h5>
         </Col>

         <Col xs="3" >
         <h5>Alumnos del curso</h5>


         </Col>
         </Row>
         </Container>
        </Alert>
        <DualListBox
          options={options}
          selected={selected}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default KeyPad;
