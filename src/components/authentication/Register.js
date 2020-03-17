import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';


class Register extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			confirm_password: "",
			is_candidate_user: false,
			is_company_user: false
		}
	}

	handleCheckBoxChange = (e) => {
		console.log('checkbox clicked');

	}

	render() {
		return (
			<Row className="py-4">
				<Col></Col>

				<Col md={8} sm={8}>
					<Card bg={"light"}>
						<Card.Body>
							<Card.Title>Register</Card.Title>

							<Form className="py-2">
								<Row className="pb-3">
									<Col md={6} sm={12}>
										<Form.Label>First Name</Form.Label>
										<Form.Control 
											type="text"
											placeholder="First Name" 
											name="first_name"
											value={ this.state.first_name }
											/>
									</Col>
									<Col md={6} sm={12}>
										<Form.Label>Last Name</Form.Label>
										<Form.Control 
											type="text"
											placeholder="Last Name" 
											name="last_name"
											value={ this.state.last_name }
											/>
									</Col>
								</Row>

								<Form.Group>
									<Form.Label>Email</Form.Label>
									<Form.Control 
										type="email" 
										placeholder="Email"
										name="email"
										value={ this.state.email }
										/>
								</Form.Group>

								<Row className="pb-3">
									<Col md={6} sm={12}>
										<Form.Label>Password</Form.Label>
										<Form.Control 
											type="password"
											placeholder="Password" 
											name="password"
											value={ this.state.password }
											/>
									</Col>
									<Col md={6} sm={12}>
										<Form.Label>Confirm Password</Form.Label>
										<Form.Control 
											type="password"
											placeholder="Confirm Password" 
											name="confirm_password"
											value={ this.state.confirm_password }
											/>
									</Col>
								</Row>

								<Form.Group>
									<Form.Check 
										type="checkbox" 
										label="Register as a candidate user" 
										name="is_candidate_user"
										checked={ this.state.is_candidate_user }
										onChange={ this.handleCheckBoxChange }
										/>
  							</Form.Group>

								<Form.Group>
									<Form.Check 
										type="checkbox" 
										label="Register as a company user" 
										name="is_company_user"
										checked={ this.state.is_company_user }
										onChange={ this.handleCheckBoxChange }
										/>
  							</Form.Group>

								<Button variant="primary" type="submit" className="mt-2">Register</Button>
							</Form>

						</Card.Body>
					</Card>
				</Col>

				<Col></Col>
			</Row>
		)
	}
}

export default Register;