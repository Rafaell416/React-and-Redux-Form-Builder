const inputs = (state=[], action) => {
  switch (action.type) {
    case 'ADD_INPUT':
      return [
        ...state,
        {
          id: action.id,
          questionText: action.questionText,
          questionType: action.questionType,
        }
      ]
    case 'UPDATE_INPUT_TEXT':
      return state.map(input =>
        (input.id === action.id)
          ? {
              ...input,
              questionText: action.newQuestionText,
            }
          : input
      )
    case 'UPDATE_INPUT_SELECT':
        return state.map(input =>
          (input.id === action.id)
            ? {
                ...input,
                questionType: action.newQuestionType
              }
            : input
        )
    case 'DELETE_INPUT':
      const inputId = action.id
      return state.filter(input => input.id !== inputId)
        
    default:
      return state
  }
}

export default inputs
