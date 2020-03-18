import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/users.js';

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
      password: '',
      is_candidate_user: false,
			is_company_user: false
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log('form submitted');

    const response = await this.props.loginUser(this.state);
    console.log('login response:', response);
  }

  handleCheckBoxChange = (e) => {
		// makes sure only one check box is checked at the same time
		this.setState({
			is_candidate_user: false,
			is_company_user: false	
    });
    
		this.setState({ [e.target.name]: e.target.checked });
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

                <Form 
                  className="py-2" 
                  onSubmit={ this.handleSubmit }
                >
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
                    <Form.Check 
                      type="checkbox" 
                      label="I am a candidate user" 
                      name="is_candidate_user"
                      checked={ this.state.is_candidate_user }
                      onChange={ this.handleCheckBoxChange }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Check 
                      type="checkbox" 
                      label="I am a company user" 
                      name="is_company_user"
                      checked={ this.state.is_company_user }
                      onChange={ this.handleCheckBoxChange }
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


export default connect(mapStateToProps, { loginUser })(Login)