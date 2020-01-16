const button = document.querySelector('#button')
const countDiv = document.querySelector('#container')
let state

function reducer(state = {count: 0}, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state
  }
}

function render() {
  countDiv.innerText = state.count
}

function dispatch(action) {
  state = reducer(state, action)
  render()
}

button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
})

dispatch({type: '@@INIT'})