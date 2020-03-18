import React from 'react';
import { connect } from "react-redux";

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button
} from 'react-bootstrap';


class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return ( 
      <Container className="py-4">
        <Row>
          <Col></Col>

          <Col md={8} sm={12}>
            <Card>
              <Card.Body>
                <Card.Title>Login</Card.Title>

                <Form className="py-2">
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                      required
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={ this.state.email }
                      onChange={ this.handleChange }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                      required
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={ this.state.password }
                      onChange={ this.handleChange }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Button variant="primary" type="submit">Login</Button>
                  </Form.Group> 
                </Form> 

              </Card.Body>
            </Card>
          </Col>

          <Col></Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn
  }
}


export default connect(mapStateToProps, {})(Login)