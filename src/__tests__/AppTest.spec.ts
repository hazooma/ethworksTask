import request from 'supertest';
import app from '../app';
import assert from 'assert';
describe('Testing The App with trying some possible requests for ADD expression API', () => {
    it('Success request with predicted results TestCase#1', async () => {
        const input = {
            "sort": "dsc",
            "expressionOne": {
                "terms": [{
                    "exponent": 1,
                    "coefficient": 2
                },
                {
                    "coefficient": 2
                },
                {
                    "coefficient": 2
                },
                {
                    "exponent": 10,
                    "coefficient": 2
                }
                ]
            },
            "expressionTwo": {
                "terms": [{
                    "exponent": 1,
                    "coefficient": 2
                }]
            }
        }
        const res = await request(app)
            .post('/expression/add')
            .send(
                input
            );


        const {
            expressionsSum,
            formattedExpression
        } = res.body
        assert.equal(expressionsSum.terms.length, 3);


        assert.equal((expressionsSum.terms.some((term: any) => (term.coefficient === 2 && term.exponent === 10))), true);
        assert.equal((expressionsSum.terms.some((term: any) => (term.coefficient === 4 && term.exponent === 1))), true);
        assert.equal((expressionsSum.terms.some((term: any) => (term.coefficient === 4 && term.exponent === 0))), true);
        assert.equal(formattedExpression, "2 (X ^ 10) + 4 (X ^ 1) + 4")


    });

})

describe('Testing App with Negative exponents and coefficients', () => {
    it('Success request with predicted results TestCase#2', async () => {
        const input = {
            "expressionOne": {
                "terms": [{
                    "exponent": 1,
                    "coefficient": -2
                },
                {
                    "coefficient": -2
                },
                {
                    "coefficient": 2
                },
                {
                    "exponent": -10,
                    "coefficient": 2
                }
                ]
            },
            "expressionTwo": {
                "terms": [{
                    "exponent": 1,
                    "coefficient": 2
                }]
            }
        }
        const res = await request(app)
            .post('/expression/add')
            .send(
                input
            );


        const {
            expressionsSum,
            formattedExpression
        } = res.body
        assert.equal(expressionsSum.terms.length, 1);
        assert.equal((expressionsSum.terms.some((term: any) => (term.coefficient === 2 && term.exponent === -10))), true);
        assert.equal(formattedExpression, "2 (X ^ -10)")


    });

})


describe('Sorting the data to be in a asc order', () => {
    it('Success request with predicted results TestCase#3', async () => {
        const input = {
            "sort": "asc",
            "expressionOne": {
                "terms": [{
                    "exponent": 1,
                    "coefficient": 3
                },
                {
                    "coefficient": -2,
                    "exponent": 2

                },
                {
                    "coefficient": 2,
                    "exponent": 4

                },
                {
                    "exponent": -10,
                    "coefficient": 2
                }
                ]
            },
            "expressionTwo": {
                "terms": [{
                    "exponent": 1,
                    "coefficient": 2
                }]
            }
        }
        const res = await request(app)
            .post('/expression/add')
            .send(
                input
            );


        const {
            expressionsSum,
            formattedExpression
        } = res.body
        assert.equal(expressionsSum.terms.length, 4);
        assert.equal((expressionsSum.terms.some((term: any) => (term.coefficient === 2 && term.exponent === -10))), true);
        assert.equal((expressionsSum.terms.some((term: any) => (term.coefficient === 5 && term.exponent === 1))), true);
        assert.equal((expressionsSum.terms.some((term: any) => (term.coefficient === -2 && term.exponent === 2))), true);
        assert.equal((expressionsSum.terms.some((term: any) => (term.coefficient === 2 && term.exponent === 4))), true);
        assert.equal(formattedExpression, "2 (X ^ -10) + 5 (X ^ 1) + -2 (X ^ 2) + 2 (X ^ 4)")


    });

})
