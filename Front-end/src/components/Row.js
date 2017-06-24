import React from 'react'
import Cell from './Cell'
import { Row as BootstraRow }  from 'reactstrap';

export default class Row extends React.Component {
    render (){
        return (
            <BootstraRow>
                <Cell row={this.props.row} column="column1"/>
                <Cell row={this.props.row} column="column2"/>
                <Cell row={this.props.row} column="column3"/>
                <Cell row={this.props.row} column="column4"/>
                <Cell row={this.props.row} column="column5"/>
                <Cell row={this.props.row} column="column6"/>
                <Cell row={this.props.row} column="column7"/>
            </BootstraRow>
        );
    }
}
