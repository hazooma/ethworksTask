Welcome to my solution to Ethworks task by me Hazem !

# Download 
`git clone https://github.com/hazooma/ethworksTask.git`

# Getting started
Before you start you should have a recent version of `npm` and `node`
installed.
To start the server go into the `server` directory and run
```
  npm install
  npm start
```
To see whether the server works check <http://localhost:26062> and see if you
get `Hello World` message.

To run the tests go run
```
npm test
```


# Environment -
To run your query on the server , you should make **post** requests to `http://localhost:26062/expression/add`

**Input/Output**
1. Input : The body of the request is a json in the below format .
- coefficient : Is Required 
- exponent : Is Not Required 
Example
```
{
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

```
2. Output : the output is a json that contains the result of summing the two expressions 
Example output for the previous Input 
```
{
    
    "expressionsSum": {
        "terms": [
            {
                "coefficient": 2,
                "exponent": -10
            },
            {
                "coefficient": 5,
                "exponent": 1
            },
            {
                "coefficient": -2,
                "exponent": 2
            },
            {
                "coefficient": 2,
                "exponent": 4
            }
        ]
    ,
    "formattedExpression": "2 (X ^ -10) + 5 (X ^ 1) + -2 (X ^ 2) + 2 (X ^ 4)"
}
```


**Solution**
1. Solution Logic is using **Map Datastructure** to compute the sum of the expressions ! .

- Complexity O(Max(n,m)) where 
- n :length of first expression and 
- m :length of second expression 
