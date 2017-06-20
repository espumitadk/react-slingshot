import React from 'react'
import Cell from './Cell'
import { Row as BootstraRow }  from 'reactstrap';
export default class Row extends React.Component {
    render (){
        return (
            <BootstraRow>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
            </BootstraRow>
        );
    }
}