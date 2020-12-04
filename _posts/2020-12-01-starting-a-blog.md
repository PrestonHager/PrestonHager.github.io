---
layout: post
title:  "Starting a Blog..."
date:   2020-12-01 00:32:56 -0800
categories: update
author: Preston Hager
---

I'm going to start a blog here. I don't know how this will go, or how often
I'll update it. It gives me somewhere to report on all the projects I work on.
Some posts might have a short tid-bit on something cool I made, while others
might have tip and tricks I learned while doing something.

### Blogging

I might as well start off with starting this blog. I'm using [Jekyll][1] to make
the website. Then I'm using [Github Pages][2] to host it. Both are awesome,
open-source technologies. To get started, I had to install both Ruby and Jekyll.
Then to create a new jekyll site I ran the command `jekyll new
prestonhager.github.io`. This creates a very basic blog site in that directory.
The next step was to configure the site how I wanted. All of these settings are
in the `_config.yml` file. I only changed things such as the name, description,
and email. There's also an option for themes, but more on that later.

Now that we've configured the site, we can run it. To do that, we run the
following command, `bundle exec jekyll serve`. This runs the website at
127.0.0.1:400. You can then see that the website should have a simple formatting
through the theme and contain information you put in your `_config.yml` file.
There's one more thing to customize though. In the top right there's an About
link. This is from the `about.markdown` or `about.md` file. Open that up, and
you'll see the template page. The top is a table that looks something like this,
Jekyll uses it to figure out what layout page to use and other information.

```markdown
---
layout: page
title: About
permalink: /about/
---
```

The `layout` property gives Jekyll what layout page to use. This is an HTML page
in the theme, we can also overwrite them, more on that later. The layout page
being used here is `_layouts/page.html` in the theme's folder. To find the
folder being used by the theme run the command `bundle info --path [theme]`.
Any filenames under the `_layouts` folder can by used as the `layout` name.
The title is simply the title of the page. The two other properties are
actually read by the layout and not jekyll, so you can pass any parameter in to
the layout files.

### Pages

Pages for the blog are stored under the `_posts` folder. Each post must start
with a date in the format `year-month-day` and then the title of the post. The
title doesn't matter as much, but should follow the same format of dashes and
lowercase.

### Themes

Changing the theme is also an option. I ran into a few issues with this while
experimenting though.

[1]: https://jekyllrb.com
[2]: https://pages.github.com
