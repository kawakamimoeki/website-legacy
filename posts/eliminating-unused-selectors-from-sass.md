---
title: 'Eliminating unused selectors from Sass'
date: '2022-11-02'
---

For CSS, there is https://purgecss.com.

But what about Sass?
You want to eliminate unused selectors not only from the built result, but also from the Sass source code.

I tried it. [cc-kawakami/uchini: Find unused Sass codes](https://github.com/cc-kawakami/uchini)

```bash
npm i -g uchini
```

("Uchini" is Japanese for unloading cargo from a ship that is about to sink.)

```bash
$ uchini ls --help
List CSS selectors usage

USAGE
  $ uchini ls --scss <value> --content <value> [--output
    <value>] [--unusedOnly]

FLAGS
  --content=<value> (required) Path to content file
  --output=<value> Path to output file
  --scss=<value> (required) Path to CSS file
  --unusedOnly Unused selectors only

DESCRIPTION
  List CSS selectors usage

EXAMPLES
  $ uchini ls --css path/to/css --content path/to/content --output path/to/output --unusedOnly
```

```bash
uchini ls --scss path/to/scss --content 'path/**/*.html' --output output.json
```

```json:output.json
[
  {
    "selector": ".header",
    "positions": [
      "frontend/stylesheets/_layout.scss:20:2"
    ]
  },
  {
    "selector": ".card",
    "positions": [
      "frontend/stylesheets/_card.scss:1:0"
    ]
  }
]
```

Internally we use the following.

- [sass - npm](https://www.npmjs.com/package/sass)
- [purgecss - npm](https://www.npmjs.com/package/purgecss)
- [source-map - npm](https://www.npmjs.com/package/source-map)

First, compile Sass.

```javascript
const compiled = sass.compile(scss, {
  style: 'compressed',
  sourceMap: true,
  logger: sass.Logger.silent
})
```

Then, the source-map creates a consumer.

```javascript
const consumer = await new sourceMap.SourceMapConsumer(compiled.sourceMap)
```

Next, we identify the CSS selectors that are not being used by purgecss.

```javascript
const rejectedCSS = await new PurgeCSS().purge({
  content: [content],
  css: [{ raw: css }],
  rejected: true
})[0].rejected
```

Then, the consumer can use the source map to traverse the Sass lines corresponding to a given line of CSS.

```javascript
const position = this.consumer.originalPositionFor({
  line: 1, // since the source map is a single line in compressed
  column: startOfSelector
})
```

That's it.

Thank you for reading.
