import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import AlumnoBrowser from "../Browsers/AlumnoBrowser";

const CardAlumnoBrowser = props => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" />
        <CardBody>
          <AlumnoBrowser />
        </CardBody>
      </Card>
    </div>
  );
};

export default CardAlumnoBrowser;
