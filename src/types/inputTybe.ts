export type Term = {
    coefficient: number;
    exponent?: number;
}

export type Expression = {
    terms: Term[]
}