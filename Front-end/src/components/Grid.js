import React from 'react'
import Row from './Row'
import { Container} from 'reactstrap';

export default class Grid extends React.Component {
    render (){
        return (
            <Container className="col-md-2 col-md-offset-5">
                <Row row={"row1"}/>
                <Row row={"row2"}/>
                <Row row={"row3"}/>
                <Row row={"row4"}/>
                <Row row={"row5"}/>
                <Row row={"row6"}/>
            </Container>
        );
    }
}
