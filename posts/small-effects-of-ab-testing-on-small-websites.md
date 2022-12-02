---
title: 'Small effects of A/B testing on small websites'
date: '2022-11-16'
---

I have done A/B testing in my work. My impression after doing it is that A/B testing is very delicate and intricate, so it is very difficult to handle. I think there is a high possibility of failure. In this article, I would like to discuss why A/B testing is so difficult.

A/B testing is a method of testing two sites by delivering a pattern of appearance and functionality to a specified percentage of users, to see which pattern is more likely to achieve a given goal. The goals are, for example, page transitions, button clicks, conversions, etc. This is expected to be set appropriately depending on where the A/B test is conducted.

It is important to note that A/B testing can only tell us what is likely, it does not mean that the results will always be better when we actually release the product.

Now that I have given you an overview, I will talk about why this A/B testing is so difficult. First of all, let's talk about goal setting. For example, let's say you want to test a link that takes you to a form, and you set the number of times the link is pressed as the target value. At this point, it is important to note that even if the link is pressed more often in Pattern B, it does not necessarily mean that the number of completed conversions will be higher. In A/B testing, the business-critical metrics that you do not want to lower by making changes, such as the number of completed conversions, are called **guardrail metrics**.

A possible reason for the actual release of a pattern that performed well in A/B testing but did not affect conversions or had a negative impact is that this guardrail metric is being ignored.

Of course, it is best to set the final goal, the conversion completion rate, as the target for A/B testing, but there may be cases where the population of conversions is too small to test because the differences in goals are not significantly comparable. This is where guardrail metrics come into play, which is ultimately the same as setting the conversion completion rate as the A/B test goal. In other words, A/B testing will not work if the number of inflows and conversions are considerably low.

I believe this phenomenon often occurs with site changes themselves to begin with. For a website with a clear goal, such as an landing page, you should design the story of how the user achieves the goal. This is very important from a macro perspective.

If the number of inflows and conversions are low, we believe it is more effective to make changes to the story, such as fewer pages or a richer main visual, rather than small changes such as button decorations or wording.
