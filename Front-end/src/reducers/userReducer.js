const initialState = {
    name: "noName",
    age: 0
}

const userReducer = (state = initialState, action) => {
    if(action.type === "CHANGE_NAME"){
        state = {...state }
        state.name = action.value
    }
    if(action.type === "CHANGE_AGE"){
        state = {...state }
        state.age = action.value
    }
    return state
}

 export default userReducer;