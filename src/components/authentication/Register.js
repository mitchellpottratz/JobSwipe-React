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
			is_company_user: false,
			errorMessages: []
		}
	}

	handleTextInputChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleCheckBoxChange = (e) => {
		// makes sure only one check box is checked at the same time
		this.setState({
			is_candidate_user: false,
			is_company_user: false	
		});

		this.setState({ [e.target.name]: e.target.checked });
	}

	handleSubmit = (e) => {
		e.preventDefault();

		// clears all error messages which may be on the form
		this.setState({ errorMessages: [] })
		
		this.checkPassword();
		
	}

	checkPassword = () => {
		const password = this.state.password;
		const confirmed_password = this.state.confirm_password;

		// show error message if the password is not atleast 8 characters long
		if (password.length < 8) {
			const passwordErrorMessages = [];
			passwordErrorMessages.push('Password must be atleast 8 characters long');

			// show error message if the passwords do not match
			if (password !== confirmed_password) {
				passwordErrorMessages.push('Passwords must match')

				this.setState({
					errorMessages: passwordErrorMessages
				});
			}
		}

	}

	render() {
		return (
			<Row className="py-4">
				<Col></Col>

				<Col md={8} sm={8}>
					<Card bg={"light"}>
						<Card.Body>
							<Card.Title>Register</Card.Title>

							{ this.state.errorMessages.map(message => {
								return (
									<div>
										<small className="text-danger">{ message }</small>
									</div>
								)
							}) }

							<Form className="py-2" onSubmit={ this.handleSubmit }>
								<Row className="pb-3">
									<Col md={6} sm={12}>
										<Form.Label>First Name</Form.Label>
										<Form.Control 
											required
											type="text"
											placeholder="First Name" 
											name="first_name"
											value={ this.state.first_name }
											onChange={ this.handleTextInputChange }
											/>
									</Col>
									<Col md={6} sm={12}>
										<Form.Label>Last Name</Form.Label>
										<Form.Control 
											required
											type="text"
											placeholder="Last Name" 
											name="last_name"
											value={ this.state.last_name }
											onChange={ this.handleTextInputChange }
											/>
									</Col>
								</Row>

								<Form.Group controlId="validationCustom01">
									<Form.Label>Email</Form.Label>
									<Form.Control 
										required
										type="email" 
										placeholder="Email"
										name="email"
										value={ this.state.email }
										onChange={ this.handleTextInputChange }
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
											onChange={ this.handleTextInputChange }
											/>
											<small>Must be atleast 8 characters long</small>
									</Col>
									<Col md={6} sm={12}>
										<Form.Label>Confirm Password</Form.Label>
										<Form.Control 
											type="password"
											placeholder="Confirm Password" 
											name="confirm_password"
											value={ this.state.confirm_password }
											onChange={ this.handleTextInputChange }
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