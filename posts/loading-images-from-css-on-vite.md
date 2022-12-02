---
title: Loading images from CSS on Vite
date: '2022-10-24'
---

Vite uses `postcss-import` to achieve `@import`.

[Features | Vite](https://vitejs.dev/guide/features.html#css)

For example, suppose you have the following code.

```
src/
  ├── img/
  │ └── about-mainvisual.png
  └── css/
       ├── application.css
       └─ pages/
             └── about.css
```

```css:src/css/application.css
@import ". /pages/about.css"

main {
  background-color: white;
}
```

```css:src/css/pages/about.css
.about__mainvisual {
  background-image: url(... /... /img/about-mainvisual.png);
}
```

**This will not work. **

Resolve `@import`. 2.
Resolving `url()`.

Vite will process in the following order: 1.

So, at 1.

```css:src/css/application.css
.about_mainvisual {
  background-image: url(... /... /img/about-mainvisual.png);
}

main {
  background-color: white;
}
```

is equivalent to temporarily generating CSS that says.
So, if you use `url(...)', you will get `url(...)'. /... /img/about-mainvisual.png)` is wrong.

What should we do?
The correct answer is.

```diff css:src/css/pages/about.css
.about__mainvisual {
- background-image: url(... /... /img/about-mainvisual.png);
+ background-image: url(/img/about-mainvisual.png);
}
```

**Please specify absolute paths. That way, the solution is independent of the image's referent.
Here, it is assumed that the `root` setting of Vite is `src`. **

Translated with www.DeepL.com/Translator (free version)
