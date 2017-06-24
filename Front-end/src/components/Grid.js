import React from 'react'
import Row from './Row'
import { Container} from 'reactstrap';

export default class Grid extends React.Component {
    render (){
        let style = {
            "backgroundColor": "#f9d102",
            "width": "455px",
            "margin": "auto",
            "border": "3px solid dark-yellow",
            "padding": "15px"

        }
        return (
            <div style={style}>
                <Row row={"row1"}/>
                <Row row={"row2"}/>
                <Row row={"row3"}/>
                <Row row={"row4"}/>
                <Row row={"row5"}/>
                <Row row={"row6"}/>
            </div>
        );
    }
}
