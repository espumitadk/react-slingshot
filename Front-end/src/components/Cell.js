import React from 'react'
import {connect} from 'react-redux'
import { Button } from 'reactstrap'
import playerMovementAction from '../actions/playerMovementAction'

export class Cell extends React.Component {
    render () {
        let color = "secondary";
        if (this.props.cell == "PLAYER_1" ){
          color = "danger";
        };
        if (this.props.cell == "PLAYER_2" ){
          color = "success";
        };
        let style = {
          "borderRadius": "70px",
          "margin": "5px",
          "width": "55px",
          "height": "55px",
        }
        return (
            <Button
                color={color}
                style={style}
                disabled={!this.props.isGameStarted}
                className="col-ms-3"
                onClick={() => this.props.getNewCells(this.props.row, this.props.column)}
            ></Button>
        );
    }
}

const mapStateToProps = (state, componentProps) => {
  return {
    cell: state.game.cells[componentProps.row][componentProps.column],
    isGameStarted: state.controls.gameControls.gameStarted
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNewCells: (row, column) => dispatch(playerMovementAction(row, column))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell)
