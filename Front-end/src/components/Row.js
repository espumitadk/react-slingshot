import React from 'react'
import Cell from './Cell'
import { Row as BootstraRow }  from 'reactstrap';

export default class Row extends React.Component {
    render (){
        return (
            <BootstraRow>
                <Cell row={this.props.row} column={1}/>
                <Cell row={this.props.row} column={2}/>
                <Cell row={this.props.row} column={3}/>
                <Cell row={this.props.row} column={4}/>
                <Cell row={this.props.row} column={5}/>
                <Cell row={this.props.row} column={6}/>
                <Cell row={this.props.row} column={7}/>
            </BootstraRow>
        );
    }
}
