import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';


class Register extends React.Component {

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
											/>
									</Col>
									<Col md={6} sm={12}>
										<Form.Label>Last Name</Form.Label>
										<Form.Control 
											type="text"
											placeholder="Last Name" 
											name="last_name"
											/>
									</Col>
								</Row>

								<Form.Group>
									<Form.Label>Email</Form.Label>
									<Form.Control 
										type="email" 
										placeholder="Email"
										name="email"
										/>
								</Form.Group>

								<Row className="pb-3">
									<Col md={6} sm={12}>
										<Form.Label>Password</Form.Label>
										<Form.Control 
											type="password"
											placeholder="Password" 
											name="password"
											/>
									</Col>
									<Col md={6} sm={12}>
										<Form.Label>Confirm Password</Form.Label>
										<Form.Control 
											type="password"
											placeholder="Confirm Password" 
											name="confirm_password"
											/>
									</Col>
								</Row>

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