import React from "react";
import "./ArticleCard.css";
import { Card, Button, CardTitle, CardText } from "reactstrap";

const Example = props => {
  return (
    <div>
      <Card
        body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}
      >
        {/* <CardTitle>Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText> */}
        <Button>Button</Button>
      </Card>
    </div>
  );
};

export default Example;
