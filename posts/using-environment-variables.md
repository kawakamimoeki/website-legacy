---
title: Using environment variable more
date: '2022-10-24'
---

For example, let's say you want to embed a snippet of the tag manager into the production environment plus other environments for testing.

In the past I have implemented the following.

```erb
<% if Rails.env.production?
  <%# snippet for production %>
<% else %>
  <%# snippet for other environments %>
<% end %>
```

Hmmm. There was a problem with this.

- 👎 Can't verify if statement until deployed to production.
- 👎 Even if we can verify it with `RAILS_ENV=production`, we don't know what impact it will have elsewhere.

What about using environment variables instead?

```erb
<%= sanitize ENV[:GTM_HEAD_SNIPPET] %>
```

Good!
