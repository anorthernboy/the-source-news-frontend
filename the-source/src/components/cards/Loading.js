import React from "react";
import { Spinner } from "reactstrap";

export default class Loading extends React.Component {
  render() {
    return (
      <div className="main-section-head">
        <div className="section-main">
          <div className="main-alert-home">
            <div className="main-alert-head">
              <h2 className="section-loading">
                <Spinner color="light" />
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
