import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import usersApi from '../../api/usersApi.js';


class VerifyEmail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            invalidCode: false,
            emailIsConfirmed: false,
        }
    }


    async componentDidMount() {
        this.confirmEmailAddress(this.props.match.params.emailConfirmationCode)
    }


    confirmEmailAddress = async (emailConfirmationCode) => {
        const response = await usersApi.verifyEmailAddress(emailConfirmationCode);

        if (response.status.code === 204) {
            this.setState({ emailIsConfirmed: true });
        } 
        else {
            this.setState({ invalidCode: true });
        }
    } 


    render() {

        // if the code in the parameters was invalid
        if (this.state.invalidCode) {
            return (
                <Redirect to="/login" />
            )
        }

        return (
            <Container className="text-center pt-4" >
                { this.state.emailIsConfirmed ? (
                    <div className="mt-4">
                        <h3>Email Confirmed</h3> 
                        <FontAwesomeIcon icon={ faCheck } />
                    </div>
                ) : (
                    <div className="mt-4">
                        <h3>Confirming Email Address</h3>
                        <Spinner 
                            animation="border" 
                            variant="primary" 
                            className="mt-2"
                        />
                    </div>
                )
                }
            </Container>
        )
    }
}


export default VerifyEmail;




