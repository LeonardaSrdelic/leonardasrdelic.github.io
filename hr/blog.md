---
layout: default
title: blog
lang: hr
permalink: /hr/blog/
---

# Blog

<ul>
{% for post in site.posts %}
  {% if post.lang == "hr" %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span style="color: #888; font-size: 0.9em;">
        {{ post.date | date: "%d.%m.%Y." }}
      </span>
    </li>
  {% endif %}
{% endfor %}
</ul>
