import React from "react";
import { Spinner } from "reactstrap";

export default class Loading extends React.Component {
  render() {
    return (
      <div>
        <Spinner color="light" />
      </div>
    );
  }
}
