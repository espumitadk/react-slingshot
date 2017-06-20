import React from 'react'
import Row from './Row'
import { Container} from 'reactstrap';

export default class Grid extends React.Component {
    render (){
        return (
            <Container>
                <Row/>
                <Row/>
                <Row/>
                <Row/>
                <Row/>
                <Row/>
            </Container>
        );
    }
}