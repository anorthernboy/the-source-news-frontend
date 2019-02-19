import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import { Link } from "@reach/router";

export default class BottomNav extends React.Component {
  render() {
    return (
      <ButtonGroup>
        <Button>
          <Link to="/">
            <div>
              <span style={{ color: "black" }}>the</span>
              <span style={{ fontWeight: "bold", color: "black" }}>source</span>
            </div>
          </Link>
        </Button>
        <Button />
        <Button>
          <img
            src="./search.png"
            alt="search icon"
            width="20px"
            height="20px"
          />
        </Button>
        <Button>
          <img
            src="./single-user.png"
            alt="login icon"
            width="23px"
            height="23px"
          />
        </Button>
      </ButtonGroup>
    );
  }
}
