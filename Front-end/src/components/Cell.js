import React from 'react'
import {connect} from 'react-redux'
import { Button } from 'reactstrap'
import sendMovementAction from '../actions/sendMovementAction'

export class Cell extends React.Component {
    render (){
        return (
            <Button color="secondary" className="col-ms-3" onClick={() => this.props.getNewCells(this.props.row, this.props.column)}>{this.props.row}_{this.props.column}</Button>
        );
    }
}

const mapStateToProps = state => {
  return {
    cells: state.game.cells
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
