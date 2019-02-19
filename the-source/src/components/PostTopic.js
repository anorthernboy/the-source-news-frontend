import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import * as api from "../api/api";

export default class PostTopic extends React.Component {
  state = {
    isLoading: true,
    slug: "",
    description: "",
    addedTopic: ""
  };

  render() {
    const { isLoading, slug, description, addedTopic } = this.state;
    if (isLoading) return <p className="tc helvetica black-70">Loading...</p>;
    if (addedTopic.length !== 0)
      return (
        <p className="tc helvetica black-70">{`${
          addedTopic.slug
        } was successfully added`}</p>
      );
    else
      return (
        <div>
          <h4>POST TOPIC HERE</h4>
          <Form onSubmit={this.addNewTopic}>
            <FormGroup>
              <Label for="slug">Topic</Label>
              <Input
                id="slug"
                value={slug}
                onChange={this.handleChange}
                type="text"
                name="text"
                placeholder="Topic must be unique"
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                id="description"
                value={description}
                onChange={this.handleChange}
                type="textarea"
                name="text"
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>
      );
  }

  componentDidMount = () => {
    this.setState({ isLoading: false });
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  addNewTopic = event => {
    event.preventDefault();
    const { slug, description } = this.state;
    const newTopic = { slug, description };
    api.addTopic(newTopic).then(({ data }) =>
      this.setState({
        addedTopic: data
      })
    );
  };
}
