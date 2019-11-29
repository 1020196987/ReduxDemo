const defaultState = {
    'content': ['aaaaa', 'bbbbb', 'ccccc', 'dddddd'],
    'inputVal': ''
}
export default (state = defaultState, action)=>{
    if (action.type === 'inputVal') {
        console.log('改变了store里的值')
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputVal = action.value
        return newState
    }
    return state
}