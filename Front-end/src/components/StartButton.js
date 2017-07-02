import React from 'react'
import {connect} from 'react-redux'
import { Button } from 'reactstrap'
import serverStartGameAction from '../actions/serverStartGameAction'

export class StartButton extends React.Component {
    render (){
        return (
            <Button
                color="warning"
                disabled={this.props.isGameStarted}
                onClick={() => this.props.startGame()}
            >START GAME</Button>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    isGameStarted: state.controls.gameControls.gameStarted
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => dispatch(serverStartGameAction())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartButton)