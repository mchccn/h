| [a](https://www.npmjs.com/package/@cursorsdottsx/a)
| [b](https://www.npmjs.com/package/@cursorsdottsx/b)
| [c](https://www.npmjs.com/package/@cursorsdottsx/c)
| [d](https://www.npmjs.com/package/@cursorsdottsx/d)
| [e](https://www.npmjs.com/package/@cursorsdottsx/e)
| [f](https://www.npmjs.com/package/@cursorsdottsx/f)
| [g](https://www.npmjs.com/package/@cursorsdottsx/g)
| **h**
| [i](https://www.npmjs.com/package/@cursorsdottsx/i)
| [j](https://www.npmjs.com/package/@cursorsdottsx/j)
| [k](https://www.npmjs.com/package/@cursorsdottsx/k)
| [l](https://www.npmjs.com/package/@cursorsdottsx/l)
| [m](https://www.npmjs.com/package/@cursorsdottsx/m)
| [n](https://www.npmjs.com/package/@cursorsdottsx/n)
| [o](https://www.npmjs.com/package/@cursorsdottsx/o)
| [p](https://www.npmjs.com/package/@cursorsdottsx/p)
| [q](https://www.npmjs.com/package/@cursorsdottsx/q)
| [r](https://www.npmjs.com/package/@cursorsdottsx/r)
| [s](https://www.npmjs.com/package/@cursorsdottsx/s)
| [t](https://www.npmjs.com/package/@cursorsdottsx/t)
| [u](https://www.npmjs.com/package/@cursorsdottsx/u)
| [v](https://www.npmjs.com/package/@cursorsdottsx/v)
| [w](https://www.npmjs.com/package/@cursorsdottsx/w)
| [x](https://www.npmjs.com/package/@cursorsdottsx/x)
| [y](https://www.npmjs.com/package/@cursorsdottsx/y)
| [z](https://www.npmjs.com/package/@cursorsdottsx/z)
|

**H is for Hashcode**

# @cursorsdottsx/h

A pretty bad implementation of a hashcode that works 99.9% of the time.

#### Installation

Hashcode can be installed with either NPM or Yarn.

```bash
npm install @cursorsdottsx/h
```

```bash
yarn add @cursorsdottsx/h
```

#### Usage

Upon importation of Hashcode, it will modify the `Object` global and give objects a `hashCode` method.

```js
require("@cursorsdottsx/h");
```

```js
import "@cursorsdottsx/h";
```

#### Documentation

**`Object.prototype.hashCode(): string`**

#### Examples

```js
({ foo: "bar" }).hashCode(); // => KE9iamVjdCRmb28jc3RyaW5nOmZvbyk=

({ object: { pls: "install" }, hello: "world", }).hashCode(); // => KE9iamVjdCRvYmplY3QjS0U5aWFtVmpkQ1J3YkhNamMzUnlhVzVuT25Cc2N5az1AaGVsbG8jc3RyaW5nOmhlbGxvKQ==
```

The hashcode of an object should be the same, and two objects with the same hashcode should be the same. If this is not true for a pair of objects please open an issue (properties that are not enumerable don't count).

[npm abc's homepage](https://codepen.io/cursorsdottsx/full/KKWNRaY)
