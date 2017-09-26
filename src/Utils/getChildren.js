
function getValues (familyId, fatherId) {
  return function (x) {
    return x.familyId === familyId && x.fatherId === fatherId
  }
}

function subinputs (inputs, familyId, fatherId) {
  return inputs.map(input => {
    let Subinputs = input.children
    let sub = Subinputs.filter(getValues(familyId, fatherId))
    return sub
  })
}

export function getChildren (inputs, familyId, fatherId) {
  let res = subinputs(inputs, familyId, fatherId)
  return res
}
