import React from 'react';

import { connect } from "react-redux";

import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';


class Login extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Container>
                <h1>Login Component</h1>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
}


export default connect(mapStateToProps, {  })(Login)

