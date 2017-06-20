import React from 'react'
import Cell from './Cell'

export default class Column extends React.Component {
    render (){
        return (
            <div className="column">
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
                <Cell/>
            </div>
        );
    }
}