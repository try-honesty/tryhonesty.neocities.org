---
title: Shiloh's Balrog? That can't be right
layout: layouts/base.njk
eleventyNavigation:
  key: Blog
  order: 2
date: Last Modified
---

# Shiloh's blog of wonders [citation needed]
Get an eyeful of some blog posts, why don't you. I swear I'll try to be interesting...<br/>
Posts are listed in reverse chronological order.<br/><br/>
{% for post in collections.blog | reverse %}
  [{{ post.data.title }}](/blog/{{ post.page.fileSlug }})
{% endfor %}
