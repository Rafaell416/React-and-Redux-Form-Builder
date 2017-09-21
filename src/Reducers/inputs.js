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
    case 'UPDATE_INPUT':
      return state.map(input =>
        (input.id === action.id)
          ? {
              ...input,
              questionText: action.newQuestionText,
              questionType: action.newQuestionType
            }
          : input
      )
    default:
      return state
  }
}

export default inputs
