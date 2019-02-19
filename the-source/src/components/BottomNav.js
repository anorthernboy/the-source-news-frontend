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
              <img
                src="./house.png"
                alt="home icon"
                width="23px"
                height="23px"
              />
            </div>
          </Link>
        </Button>
        <Button>
          <Link to="/articles">
            <div>
              <img
                src="./open-book.png"
                alt="articles icon"
                width="23px"
                height="23px"
              />
            </div>
          </Link>
        </Button>
        <Button>
          <Link to="/topics">
            <div>
              <img
                src="./list.png"
                alt="topics icon"
                width="23px"
                height="23px"
              />
            </div>
          </Link>
        </Button>
        <Button>
          <Link to="/users">
            <div>
              <img
                src="./multiple-users.png"
                alt="users icon"
                width="23px"
                height="23px"
              />
            </div>
          </Link>
        </Button>
      </ButtonGroup>
    );
  }
}
