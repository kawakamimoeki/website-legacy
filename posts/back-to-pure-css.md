---
title: Back to Pure CSS?
date: '2022-11-01'
---

**The problems with Sass were clear**. At the same time, **the new CSS specs were very clear and worth noting**. We tried to go back to pure CSS in light of this, but we ended up staying with it, so here's a summary of the process.

## Why are we using Sass in the first place?

This is how it was for me personally and the team. I think everyone is different in this area.

1. want to **nest** style rules when you want to style a tag without naming the class
2. want to **nest** style rules by section of content to increase visibility of source code
3. to **separate files** by purpose or content to improve searchability
4. define and reuse color patterns for large projects
5. define and reuse screen width values for **media queries**
6. large projects want to use `@extend` to **share** styles
7. some projects use `@mixin` to **share vendor prefixes** (though recently I've been using autoprefixer), **define style rules**, **share breakpoints**, etc.

## What's troubling you about Sass?

### 1. all features are preset.

**Functions that are not used are also preset**. If we as a team don't clarify the criteria of which features we want to use, there is a high possibility that **newly joined members will use every single feature** and make the review process difficult.

### 2. language implementations have been deprecated and need to be migrated.

- [Sass: LibSass is Deprecated](https://sass-lang.com/blog/libsass-is-deprecated)
- [Sass: Ruby Sass Has Reached End-Of-Life](https://sass-lang.com/blog/ruby-sass-is-unsupported)

In addition to Dart Sass, [Sass: Embedded Sass is Live](https://sass-lang.com/blog/embedded-sass-is-live)

### 3. Inherently, the policy of use tends to be unstable.

**Sass has a pragmatic policy that allows the specification to change to match CSS design theory that is considered useful in the real world**. The following features are in the process of being deprecated and will require changes to past code

#### `@import`

`@import` allows access to style conventions even when `@import` is used in a hierarchical manner, but this specification began to be seen as problematic, and `@use` was adopted as an alternative. This means that the style conventions can only be accessed in the file that invokes them.

[Sass: @import](https://sass-lang.com/documentation/at-rules/import)

### 4. possible conflicts with CSS body spec.

#### Division using `/`.

In CSS, there is a property that uses `/` as a delimiter.
In this case, Sass cannot distinguish whether the `/` is a delimiter or a divisor. As an alternative, we recommend `Math.div`.

[Sass: Breaking Change: Slash as Division](https://sass-lang.com/documentation/breaking-changes/slash-div)

## 🤔 By the way, what's going on with CSS?

[cssdb - CSS Database](https://cssdb.org/) defines stages** to standardization of new features, called **stages\*\*.

|Stage|Level|Maturity Level|
|:--:|:--:|:--:|Stage3
|Stage4|Standardized|High
|Stage3|Embraced|:
|Stage2|Allowable|:
|Stage1|Experimental|:
|Stage0|Aspirational|Low

It seems that as the Stage goes up, the browser support actually improves.
Also, [postcss-plugins/plugin-packs/postcss-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss- preset-env) allows you to comply with this stage and use features that will be standardized in the future.

It seems that there are quite a few features that we used to use in Sass.

| Sass              | CSS                          | PostCSS Plugin                |
| ----------------- | ---------------------------- | ----------------------------- |
| nesting           | nesting rule (stage 1)       | postcss-nesting               |
| file-splitting    | -                            | postcss-import                |
| color reuse       | custom property (stage 3)    | postcss-custom-property       |
| reuse media query | custom media query (stage 2) | postcss-custom-media          |
| class inheritance | under discussion             | postcss-extend                |
| Mixin             | under discussion [^1]        | postcss-mixins, postcss-apply |

[^1]: `@apply` is being discussed, but apparently there are technical issues that are making it difficult.

Please do some research on the notation of each rule.

### How to reproduce Mixin for different purposes

- Define common style rules => Do not adopt single class
- Common vendor prefix => Autoprefixer
- Common breakpoints => custom media query in CSS

## Low-stage rule specs are very unstable

The stage defined by W3C is not an official release version and its use is less stable.
**Low stage must also be taken into account that the specification is more likely to change or be REJECTED**.
Before one has little knowledge or experience with draft CSS, it is better to follow the default (stage 2) of postcss-preset-env.

For example, the nesting rule is still in stage 1, so the specification is likely to change. **If you implement it in postcss-preset-env, you may have to re-implement just the nesting part later**.

## Maybe it's too early to adopt postcss-preset-env.

It may still be too early to adopt postcss-preset-env after all the above discussion.
From now on.

- **We will use CanIUse and other tools to see how browsers support it**.
- **If the stage of the function we want to use reaches 4 and browser support is sufficient, we will adopt it**.
- **We will continue to adopt PostCSS for approaches other than CSS itself, such as autprexier**.

I think that is what I was thinking. Thank you very much.
