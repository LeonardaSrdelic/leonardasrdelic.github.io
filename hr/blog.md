---
layout: default
title: blog
lang: hr
permalink: /hr/blog/
---

# Analize

<div class="blog-list">
  {% for post in site.posts %}
    {% if post.lang == "hr" %}
      <div class="blog-list-item">
        {% if post.header_image %}
          <div class="blog-list-thumb">
            <a href="{{ post.url | relative_url }}">
              <img src="{{ post.header_image | relative_url }}" alt="{{ post.title }}">
            </a>
          </div>
        {% endif %}
        <div class="blog-list-text">
          <a href="{{ post.url | relative_url }}" class="blog-list-title">{{ post.title }}</a>
          <div class="blog-list-date">
            {{ post.date | date: "%d.%m.%Y." }} • 
            {% assign words = post.content | number_of_words %}
            {% assign minutes = words | divided_by: 220 | plus: 1 %}
            {{ minutes }} min čitanja
            <span class="blog-list-author">
              • autor:
              {% if post.author %}
                {% if post.author.name %}
                  {% if post.author.url %}
                    <a href="{{ post.author.url }}" target="_blank">{{ post.author.name }}</a>
                  {% else %}
                    {{ post.author.name }}
                  {% endif %}
                {% else %}
                  {{ post.author }}
                {% endif %}
              {% else %}
                Leonarda Srdelić
              {% endif %}
            </span>
          </div>
          <!-- MINI PREVIEW TEKSTA -->
          <div class="blog-list-excerpt">
            {% if post.description %}
              {{ post.description }}
            {% else %}
              {{ post.excerpt | strip_html | truncate: 150 }}
            {% endif %}
          </div>
          <!-- GUMB PROČITAJ VIŠE -->
          <div style="margin-top: 8px;">
            <a href="{{ post.url | relative_url }}" class="blog-list-readmore">Pročitaj više →</a>
          </div>
          <!-- TAGOVI -->
          {% if post.tags %}
            <div class="blog-list-tags" style="margin-top: 6px;">
              {% for tag in post.tags %}
                <span class="blog-tag" style="display:inline-block; background:#e0e8ef; color:#2b5d8c; font-size:0.93em; border-radius:4px; padding:2px 9px; margin-right:7px;">
                  #{{ tag }}
                </span>
              {% endfor %}
            </div>
          {% endif %}
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>
