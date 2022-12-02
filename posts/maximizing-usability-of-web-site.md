---
title: Maximizing usability of web site
date: '2022-10-24'
---

## Target audience.

- Anyone involved in site design.
- (It has not yet been decided whether we will delve deeply into specific measurement methods, etc. (The content may be geared toward technical experts.)

## Assumed Issues

- Not able to define user-pleasing content and easy-to-use functions.
  - Not sure of the criteria for "happy" and "easy to use".
- Cannot design to maximize user task completion rate
  - Only PV is defined as a task.
  - Only PV can be measured as a completion rate.

## Define "delightful" and "easy to use" for users

In general, usability tasks are considered to have excellent performance in the following indicators. Here, a task is an action that a user performs to reach a goal, such as reading content or using a function.

- _Task success rate_.
- _Time on task_.
- \_Use of search vs. navigation

see [5 UX KPIs You Need To Track - Every Interaction](https://www.everyinteraction.com/articles/5-ux-kpis-need-track/)

## Set up a goal attainment process

A goal attainment process consists of several steps that define how you want users to use your site. Each step is a task, but goal attainment can also be called a major task.

### Process for designing the site in more detail

Steps should be defined in as much detail as possible; thinking in terms of units of action, rather than PV, will allow for discussion of the content/functionality of the pages as well as the site structure.

- \_Bad: page views as a step.
- _Good: Search form item entry as a step_.

If you are using GA4, this step can be defined as any event, not just PV, e.g. scroll or click. The method for retrieving the event you want to use as a step is described below.

### Can there be more than one goal attainment process?

Few sites will have a single goal attainment process. The process may vary depending on user preferences, time of year, advertising, etc. In such cases, please define user types and pathways, and set up the corresponding processes.

## Design pages according to steps

Design the page and site structure based on the steps you expect users to take.
If there are multiple processes, they should be designed to satisfy all of them. If batting of processes occurs, adopt the design that works best for the one with the highest priority.
This practice would mean that content that does not impact the process is content that is not needed. However, it is impossible to cover all user behavior patterns, so there is no need to aim for perfection. However, when adding content, remember to ask the question, "Is it really effective in achieving our goals? If you do add content, however, remember to ask the question, "Is it really effective in helping me achieve my goals?

Also, please use the

- _Time on task_.
- _Use of search vs. navigation_.

in accordance with the following indicators

- Minimize the number of steps
- Complete the input as much as possible.
- Provide links instead of searches.

Provide links, not searches.

## Measuring the success rate of steps

As a basic practice, use the "Goal Achievement Process" in GA4's "Search" section.
Here, you

- You can define each step
- You can see the completion/abandonment rate of the steps

and can achieve the same results.

You can also combine the Tag Manager with GA4 to measure the following events

- Click events for all elements
  - HTML Elements
  - Text
  - Form values
  - Link destination
- Scroll rate
- Display of an element

## Improve the success rate of steps

Consider measures that will improve the success rate of each step. Focusing on steps with particularly low success rates or starting with the easiest to implement measures will reduce confusion about where to begin.

## Consider process changes

If you find it difficult to improve the success rate of a step, consider changing the process.

## Reference.

- [5 UX KPIs You Need To Track - Every Interaction](https://www.everyinteraction.com/articles/5-ux-kpis-need-track/)
- [Think about a more "effortless" experience for users | UX MILK](https://uxmilk.jp/82642)
