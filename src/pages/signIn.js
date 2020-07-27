import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Axios from 'axios';

export default class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  addToLogin = (event) => {
    event.preventDefault();
    this.setState({
      email: event.target.value,
      password: event.target.value,
    });
    Axios.post("http://localhost:3010/api/login", {
      email: this.state.email,
      password: this.state.password,
    })
    .then(res => {
      // console.log(res);
      Axios({
        method: "POST",
        url: "http://localhost:3010/api/post",
        headers: {
          authorization: "Bearer " + res.data.token
        }
      }).then(res => {
        console.log(res.data)
      })
    })
    .catch(err => {
      console.log(err)
    })

    

    this.setState({
      email: "",
      password: ""
    })
  }
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="email" sm={2} size="lg">Email</Label>
          <Col sm={10}>
            <Input onChange={this.handleEmail} type="text" name="email" id="userEmail" bsSize="lg" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm={2}>Password</Label>
          <Col sm={10}>
            <Input onChange={this.handlePassword} type="password" name="password" id="userPassword"/>
          </Col>
        </FormGroup>
        <Button type="submit" onClick={this.addToLogin}>Submit</Button>
      </Form>
    );
  }
}