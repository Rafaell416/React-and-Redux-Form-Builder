const inputs = (state=[], action) => {
  switch (action.type) {
    case 'ADD_INPUT':
      return [
        ...state,
        {
          id: action.id,
          questionText: action.text,
        }
      ]
    default:
      return state
  }
}

export default inputs
