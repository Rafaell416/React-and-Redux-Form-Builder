
const subinputs = (state=[], action) => {
    switch (action.type){
        case 'ADD_SUB_INPUT':
            return [
              ...state,
              {
                familyId: action.familyId,
                fatherId: action.fatherId,
                id: action.id,
                questionText: action.questionText,
                questionType: action.questionType,
                condition: action.condition,
                answer: action.answer
              }
            ]
        default:
            return state
    }
}

export default subinputs
