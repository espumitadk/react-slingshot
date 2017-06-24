import React from 'react'
import {connect} from 'react-redux'
import { Button } from 'reactstrap'
import sendMovementAction from '../actions/sendMovementAction'

export class Cell extends React.Component {
    render () {
        let color = "secondary";
        if (this.props.cell != "" ){
          color = "danger";
        };
        let style = {
          "borderRadius": "70px",
          "margin": "5px",
          "width": "55px",
          "height": "55px",
        }
        return (
            <Button color={color} style={style} className="col-ms-3" onClick={() => this.props.getNewCells(this.props.row, this.props.column)}></Button>
        );
    }
}

const mapStateToProps = (state, componentProps) => {
  return {
    cell: state.game.cells[componentProps.row][componentProps.column]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNewCells: (row, column) => dispatch(sendMovementAction(row, column))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell)
