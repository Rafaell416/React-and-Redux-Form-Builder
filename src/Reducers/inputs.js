const inputs = (state=[], action) => {
  switch (action.type) {
    case 'ADD_INPUT':
      return [
        ...state,
        {
          familyId: action.familyId,
          id: action.id,
          questionText: action.questionText,
          questionType: action.questionType,
          children: action.children
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
    case 'ADD_SUB_INPUT':
        return state.map(arr =>
          (arr.familyId === action.familyId)
            ? {
                ...arr,
                  children: arr.children.concat({
                    familyId: action.familyId,
                    fatherId: action.fatherId,
                    id: action.id,
                    questionText: action.questionText,
                    questionType: action.questionType,
                    condition: action.condition,
                    answer: action.answer
                  })
              }
            : arr
        )
   case 'DELETE_SUB_INPUT':
        const SubInputId = action.id
        return state.map(arr =>
          (arr.familyId === action.familyId)
            ? {
                ...arr,
                children: arr.children.filter(SubInput => SubInput.id !== SubInputId)
              }
            : arr
        )
    case 'UPDATE_SUB_INPUT_CONDITION':
        return state.map(arr =>
          (arr.familyId === action.familyId)
            ? {
                ...arr,
                children: arr.children.map(i =>
                  (i.id === action.id)
                    ? {
                        ...i,
                        condition: action.newSubInputCondition
                      }
                    : i
                )
              }
            : arr
        )
    case 'UPDATE_SUB_INPUT_ANSWER':
        return state.map(arr =>
          (arr.familyId === action.familyId)
            ? {
                ...arr,
                children: arr.children.map(i =>
                  (i.id === action.id)
                    ? {
                        ...i,
                        answer: action.newSubInputAnswer
                      }
                    : i
                )
              }
            : arr
        )
    case 'UPDATE_SUB_INPUT_QUESTION':
        return state.map(arr =>
          (arr.familyId === action.familyId)
            ? {
                ...arr,
                children: arr.children.map(i =>
                  (i.id === action.id)
                    ? {
                        ...i,
                        questionText: action.newSubInputQuestion
                      }
                    : i
                )
              }
            : arr
        )
    case 'UPDATE_SUB_INPUT_QUESTION_TYPE':
        return state.map(arr =>
          (arr.familyId === action.familyId)
            ? {
                ...arr,
                children: arr.children.map(i =>
                  (i.id === action.id)
                    ? {
                        ...i,
                        questionType: action.newSubInputQuestionType
                      }
                    : i
                )
              }
            : arr
        )
    default:
      return state
  }
}

export default inputs
