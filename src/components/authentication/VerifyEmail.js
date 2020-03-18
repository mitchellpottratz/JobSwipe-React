import React from 'react';
import { UseParams, Redirect } from 'react-router';
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
        const response = await usersApi.verifyEmailAddress(this.props.match.params.emailConfirmationCode);

        if (response.status.code === 204) {
            this.setState({ emailIsConfirmed: true });
        } else {
            this.setState({ invalidCode: true });
        }
    }


    confirmEmailAdddress = (emailConfirmationCode) => {
            
    } 


    render() {

        if (this.state.emailIsConfirmed) {
            return (
                <h1>Email Confirmed</h1>
            )
        } else {
            return (
                <h1>Confirming email address</h1>
            )
        }
    }
}


export default VerifyEmail;




