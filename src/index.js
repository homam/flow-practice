// @flow

const graphqlHTTP = require('express-graphql')

const app = require('express')()

const {StarWarsSchema} = require('./starwars-schema')

app.use('/graphql', graphqlHTTP(request => ({
  schema: StarWarsSchema,
  graphiql: true
})))

app.get('/hello', (req, res) => {})

app.listen(4000);

type F<X, Y> = (x: X) => Y

const apply = <X, Y>(f: (x: X) => Y, x: X) : Y => f(x)

const apply1 = <X, Y>(f: F<X, Y>, x: X) : Y => f(x)

const plus2 = (x: number) : number => x + 2

const padRight = (x: string) : string => x + ' '


apply(plus2, 0);
apply(padRight, 0)

apply1(plus2, 0);


console.log(
  ['a','b'].map(x => x * 1)
)