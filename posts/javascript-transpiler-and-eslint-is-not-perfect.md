---
title: 'Javascript Transpiler and ESLint are NOT Perfect'
date: '2022-11-01'
---

## Summary

- Even with a transpiler, **not all ECMAScript descriptions can be converted**.
- Even with ESLint, **not all ECMAScript descriptions can be linted**.

## Inspect!

When using ECMAScript, what does the transpiler convert and what does it parse?

- Verify what the transpiler converts and what it ignores
- Verify what ESLint parses and what it ignores

[cc-kawakami/transpilers-and-eslint-are-not-perfect](https://github.com/cc-kawakami/transpilers-and-eslint-are-not-perfect)

## Input for validation

- Code samples based on ES6 to ESNext standards
- Pick a function that you may have occasion to use

```javascript
/**
 * ES2015
 * ------------------------------------------------
 */
/** const, let */
const cst = 1
let lt = 2
console.log(cst)
console.log(lt)

/** Allow function */
const fn = () => {
  console.log('fn')
}

/** classes */
class Hoge {
  fuga () {
    console.log('fuga')
  }
}

/**
 * ES2016
 * ------------------------------------------------
 */
/** Array.prototype.includes */
const array = [1, 2, 3, 4, 5]
console.log(array.includes(2))

/** power operator */
console.log(2**2)

/**
 * ES2017
 * ------------------------------------------------
 */
/** Async functions */
async function log () {
  console.log('hoge')
}

/** Object.values() */
const obj = { hoge: 0, fuga: 1, piyo: 2 }
console.log(Object.values(obj))

/**
 * ES2018
 * ------------------------------------------------
 */
/** Spread Properties */
const hoge = { fuga: 'piyo' }
console.log({ .... .hoge })

/** RegExp named capture groups */
console.log(/(? <year>[0-9]{4})year/.test('2021'))

/** RegExp Lookbehind Assertions */
console.log(/(? <=[0-9]+)\. [0-9]+/.test('.34'))

/**
 * ES2019
 * ------------------------------------------------
 */
/** flat array methods */
console.log([[1, 2], 3, 4].flat())

/**
 * ES2020
 * ------------------------------------------------
 */
/** Optional chaining operator */
console.log(hoge?.fuga)

/**
 * ES2021
 * ------------------------------------------------
 */
/** Logical assignment operators */
console.log(a ||= b)

/** Numeric separators */
console.log(100_000_000)

/**
 * ESNext
 * ------------------------------------------------
 */
/** static class field */
class Foo {
  static bar = 1
}

console.log(Foo.bar)
```

## Target transpiler and settings

| No  |          name          |       target       |
| :-: | :--------------------: | :----------------: |
|  1  |  Babel / conservative  | - ( `> 1% in JP` ) |
|  2  |  Babel / progressive   | - ( `> 5% in JP` ) |
|  3  |   esbuild / default    |       ESNext       |
|  4  |  esbuild / to ES2017   |       ES2017       |
|  5  |         rollup         |   not transpile    |
|  6  | rollup-plugin-esbuild  |       ES2017       |
|  7  |  Typescript / default  |        ES3         |
|  8  | Typescript / to ES2017 |       ES2017       |

## Inspection results.

### Descriptions not converted by ALL transpiles

- **RegExp named capture groups (ES2018)**
- **RegExp Lookbehind Assertions (ES2018)**
- **Flat array methods (ES2019)**

### Descriptions that cannot be validated with ESLint

- **flat array methods (ES2019)**

---

## Other things I noticed

- esbuild reduces comments by default.

## (extra) execution time

| No  |          name          |       target       | time ( s ) |
| :-: | :--------------------: | :----------------: | :--------: |
|  1  |  Babel / conservative  | - ( `> 1% in JP` ) |    0.63    |
|  2  |  Babel / progressive   | - ( `> 5% in JP` ) |    0.53    |
|  3  |   esbuild / default    |       ESNext       |    0.31    |
|  4  |  esbuild / to ES2017   |       ES2017       |    0.18    |
|  5  |         rollup         |   not transpile    |    0.20    |
|  6  | rollup-plugin-esbuild  |       ES2017       |    0.27    |
|  7  |  Typescript / default  |        ES3         |    1.21    |
|  8  | Typescript / to ES2017 |       ES2017       |    1.36    |

## Reference

- [ESLint - Pluggable JavaScript linter](https://eslint.org/)
- [Babel - The compiler for next generation JavaScript](https://babeljs.io/)
- [esbuild - An extremely fast JavaScript bundler](https://esbuild.github.io/)
- [rollup.js](https://rollupjs.org/guide/en/)
- [egoist/rollup-plugin-esbuild: Use ESBuild with Rollup to transform ESNext and TypeScript code](https://github.com/egoist/rollup-plugin-esbuild)
- [TypeScript: JavaScript With Syntax For Types.](https://www.typescriptlang.org/)
- [ES6 to ES10 (es2015 to es2019) Summary - Qiita](https://qiita.com/ozoneboy/items/9c11ac3323ca94919052)
