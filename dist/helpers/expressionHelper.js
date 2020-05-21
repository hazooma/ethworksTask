"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatExpression = exports.add = void 0;
// complexity O ( max(n,m) ) using HashMap with amortized constant cost o(1) 
exports.add = (A, B, sort) => {
    let map = new Map();
    const ATerms = A.terms;
    for (const term of ATerms) {
        const exponent = term.exponent || 0; // not required 
        const coefficient = term.coefficient; // required field
        if (map.has(exponent)) {
            map.set(exponent, (map.get(exponent) || 0) + coefficient); // sum the same exponent 
        }
        else {
            map.set(exponent, coefficient); // put the exponent 
        }
    }
    const BTerms = B.terms;
    for (const term of BTerms) {
        const exponent = term.exponent || 0; // not required 
        const coefficient = term.coefficient; // required field
        if (map.has(exponent)) {
            map.set(exponent, (map.get(exponent) || 0) + coefficient); // sum the same exponent 
        }
        else {
            map.set(exponent, coefficient); // put the exponent 
        }
    }
    const finalTerms = [];
    map.forEach((value, key) => {
        const newTerm = { coefficient: value, exponent: key };
        if (newTerm.coefficient)
            finalTerms.push(newTerm);
    });
    // if the order matters then we have to sort here
    if (sort) {
        if (sort === 1) {
            finalTerms.sort((a, b) => (a.exponent || 0) - (b.exponent || 0));
        }
        else {
            finalTerms.sort((a, b) => (b.exponent || 0) - (a.exponent || 0));
        }
    }
    return { terms: finalTerms };
};
exports.formatExpression = (expression) => {
    let formattedExpression = "";
    const firstTerm = expression.terms[0];
    if (firstTerm === null || firstTerm === void 0 ? void 0 : firstTerm.coefficient) {
        formattedExpression = `${firstTerm === null || firstTerm === void 0 ? void 0 : firstTerm.coefficient}`;
        formattedExpression += (firstTerm === null || firstTerm === void 0 ? void 0 : firstTerm.exponent) ? ` (X ^ ${firstTerm.exponent})` : "";
    }
    for (let index = 1; index < expression.terms.length; index++) {
        const term = expression.terms[index];
        if (term.coefficient) {
            formattedExpression += " + " + term.coefficient;
            if (term.exponent) {
                formattedExpression += ` (X ^ ${term.exponent})`;
            }
        }
    }
    return formattedExpression;
};
