import { Expression, Term } from "../types/inputTybe"
// complexity O ( max(n,m) ) using HashMap with amortized constant cost o(1) 
export const add = (A: Expression, B: Expression, sort: number): Expression => {


  let map = new Map<number, number>();
  const ATerms: Term[] = A.terms
  if (ATerms)
    for (const term of ATerms) {
      const exponent = term.exponent || 0 // not required 
      const coefficient = term.coefficient  // required field
      if (map.has(exponent)) {
        map.set(exponent, (map.get(exponent) || 0) + coefficient) // sum the same exponent 
      } else {
        map.set(exponent, coefficient) // put the exponent 
      }

    }

  const BTerms: Term[] = B.terms
  if (BTerms)
    for (const term of BTerms) {
      const exponent = term.exponent || 0 // not required 
      const coefficient = term.coefficient  // required field
      if (map.has(exponent)) {
        map.set(exponent, (map.get(exponent) || 0) + coefficient) // sum the same exponent 
      } else {
        map.set(exponent, coefficient) // put the exponent 
      }
    }


  const finalTerms: Term[] = []



  map.forEach((value, key) => {
    const newTerm: Term = { coefficient: value, exponent: key }
    if (newTerm.coefficient)
      finalTerms.push(newTerm)

  })

  // if the order matters then we have to sort here
  if (sort) {
    if (sort === 1) {
      finalTerms.sort((a: Term, b: Term) => (a.exponent || 0) - (b.exponent || 0))
    } else {
      finalTerms.sort((a: Term, b: Term) => (b.exponent || 0) - (a.exponent || 0))
    }
  }


  return { terms: finalTerms } as Expression




}


export const formatExpression = (expression: Expression): string => {
  let formattedExpression = ""
  const firstTerm = expression.terms[0]
  if (firstTerm?.coefficient) {
    formattedExpression = `${firstTerm?.coefficient}`
    formattedExpression += firstTerm?.exponent ? ` (X ^ ${firstTerm.exponent})` : ""
  }


  for (let index = 1; index < expression.terms.length; index++) {
    const term = expression.terms[index];
    if (term.coefficient) {
      formattedExpression += " + " + term.coefficient;
      if (term.exponent) {
        formattedExpression += ` (X ^ ${term.exponent})`
      }
    }
  }
  return formattedExpression

}