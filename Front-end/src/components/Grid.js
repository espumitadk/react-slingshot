import React from 'react'
import Column from './Column'


export default class Grid extends React.Component {
    render (){
        return (
            <div className="grid">
                <Column/>
                <Column/>
                <Column/>
                <Column/>
                <Column/>
                <Column/>
                <Column/>
            </div>
        );
    }
}