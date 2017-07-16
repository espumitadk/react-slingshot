import React from 'react'
import Row from './Row'

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
                <Row row={6}/>
                <Row row={5}/>
                <Row row={4}/>
                <Row row={3}/>
                <Row row={2}/>
                <Row row={1}/>
            </div>
        );
    }
}
