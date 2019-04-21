import React, { Component } from "react";

class Error extends Component {
  render() {
    const { errorCode, errorMsg } = this.props;
    return (
      <div className="main-section-head">
        <div className="section-main">
          <div className="main-alert-home">
            <div className="main-alert-head">
              <h1 className="section-alert-top responsive-font">{`${errorCode}`}</h1>
              <h4 className="section-alert-bottom responsive-font">{`${errorMsg}`}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
