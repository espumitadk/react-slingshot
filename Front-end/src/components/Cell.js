import React from 'react'
import { Alert } from 'reactstrap'

export default class Cell extends React.Component {
    render (){
        return (
            <div className="cell">
                <Alert color="success">
                    <strong>Well done!</strong> You successfully read this important alert message.
                </Alert>
            </div>
        );
    }
}
