import React from 'react'
import {connect} from 'react-redux'
import { changeNameAction } from '../actions/changeNameAction'
import { changeAgeAction } from '../actions/changeAgeAction'


export const App = ({user, changeName}) => {
    return (
        <div>
            <h1>Hello MR: {user.name}</h1>
            <button onClick={changeName} >Change name</button>
        </div>
    )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    otherComponent: state.otherComponent
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeName: () => dispatch(changeNameAction()),
    changeAge: () => dispatch(changeAgeAction())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)