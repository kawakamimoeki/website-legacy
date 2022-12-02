---
title: Command as Code
date: '2022-10-28'
---

Here it is. [cc-kawakami/shufu: Shufu is a simple Command as Code](https://github.com/cc-kawakami/shufu)

I think I wrote this when I wanted to define the configuration of command arguments and options.
I think I derived it when I was trying to achieve a simple Infrastructure as Code by defining the `gcloud` command as YAML.

Let's take a closer look.

The basics are as follows.

```ruby
require "shufu".

# Define the schema for the command
schema = {
  git: {
    commit: {
      amend: :flag,
      author: :equal
    }
  }
}

# Create command object from schema
command = Shufu::Command.new(schema)

# Passing a value corresponding to the schema to_s makes it a string!
p command.to_s({ amend: true, author: "cc-kawakami" })

# => "git commit --amend --author=cc-kawakami"
```

From here, you can expand, for example, by defining a schema for the `gcloud alpha storage buckets create` command, and then adding

```yaml
gcloud:
  alpha:
    storage:
      buckets:
        create:
          name: :param
          class: :equal
          bucket-level: :equal
          location: :equal
```

You can also define a value for it in the

```yaml
name: foobarbox
class: regional
bucket-level: 'on'
location: us-central1
```

Use Shufu.

```ruby
schema = YAML.load_file(schema_filepath)
values = YAML.load_file(value_filepath).map { |k, v| [k.to_sym, v] }.to_h
Shufu::Command.new(schema).to_s(values)
```

Then we have a simplified IaC!

Translated with www.DeepL.com/Translator (free version)
