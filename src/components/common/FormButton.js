import React from 'react';

import { Button, Spinner } from 'react-bootstrap';


class FormButton extends React.Component {

    render() {
        if (!this.props.isLoading) {
            return (
                <Button variant={ this.props.variant } type="submit">
                    { this.props.text }
                </Button>
            )
        } else {
            return ( 
                <Button>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    <span className="ml-2">Loading</span>
                </Button>
            )
        }
    }
}


export default FormButton;
