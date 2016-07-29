// @flow

const str: string = 'hello world!';
console.log(str);

const R = require('ramda')

// example
const fn = <T>(array: Array<T>): Promise<T> => Promise.resolve(array[0]);

// function type for fun
type F<X, Y> = (x: X) => Y

const apply = <X, Y>(f: (x: X) => Y, x: X) : Y => f(x)

const apply1 = <X, Y>(f: F<X, Y>, x: X) : Y => f(x)

const plus2 = (x: number) : number => x + 2

const padRight = (x: string) : string => x + ' '

apply(plus2, 0)
apply(padRight, 0)

apply1(plus2, 0);
apply1(padRight, 0)

['a','b'].map(x => x* 2)