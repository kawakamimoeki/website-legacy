---
title: 'The Admin Framework for Minimalist'
date: '2022-11-01'
---

[thoughtbot/administrate](https://github.com/thoughtbot/administrate) is a well-known framework for administrative screen, but it's not developer friendly。I implement my own template files for Administrate, so when new Administrate version released, **it is hard to update Administrate because template file is changed.**

But administrative screens are very easy to commonize, so I want to use a framework or library.

I done this.

[cc-kawakami/micro-admin: A minimal Administration dashboard parts.](https://github.com/cc-kawakami/micro-admin)

It can be used with Ruby on Rails or other frameworks because I implemented with [trailblazer/cells](https://github.com/trailblazer/cells).

You can define `ApplicationDashboard`.

```ruby
class ApplicationDashboard < MicroAdmin::Dashboard::Base
    # もし Rails を使うなら
    self.view_paths = [Rails.root.join("app", "views", "dashboards")]
end
```

And you extends it, define dashboard classes for models and define attributes to show each screens.

```ruby
class UserDashboard < ApplicationDashboard
    def index_attributes
        [:id, :name]
    end

    def show_attributes
        [:id, :name]
    end

    def form_attributes
        [:name]
    end

    def model_class
        User
    end
end
```

It is a point, MicroAdmin does not have template for form items. So you must write template files for input or select , etc.

```html:/app/views/dashboards/user_dashboard/new/name.erb
<input type="text" name="name" class="form-control">
```

The `value` variable will come to the edit template.

```html:/app/views/dashboards/user_dashboard/edit/name.erb
<input type="text" name="name" value="<%= value %>" class="form-control">
```

It can be rendered by calling the following.

```ruby
smith = User.new(id: 1, name: "Smith")
james = User.new(id: 1, name: "James")
dashboard = UserDashboard.new
```

```erb
<%= dashboard.index([smith, james]) %>
```

```erb
<%= dashboard.show(smith) %>
```

```erb
<%= dashboard.new(errors: ["Name is required!"]) %>
```

```erb
<%= dashboard.edit(id: 1, values: {name: "Smith"}, errors: []) %>
```

As an example, the edit method output HTML like this.

```html
<header class="navbar border-bottom py-4">
  <h2 class="m-0">Create TestModel</h2>
  <div>
    <a href="/admin/user" class="btn btn-primary"> Back to index </a>
  </div>
</header>
<main class="p-4">
  <ul class="alert alert-danger">
    <li class="ml-3">Name is required</li>
  </ul>
  <form method="patch" action="/admin/user/1">
    <div class="mb-3">
      <label for="name" class="form-label">name</label>
      <input type="text" name="name" value="Smith" class="form-control" />
    </div>
  </form>
</main>
```

**And you can style the screens by loading Bootstrap!**

The points:

- the html of form item is customizable
- not only Ruby on Rails

Thank you.
