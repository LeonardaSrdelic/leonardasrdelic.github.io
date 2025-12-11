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
          <div class="blog-list-excerpt">
            {% if post.description %}
              {{ post.description }}
            {% else %}
              {{ post.excerpt | strip_html | truncate: 150 }}
            {% endif %}
          </div>
          <div style="margin-top: 8px;">
            <a href="{{ post.url | relative_url }}" class="blog-list-readmore">Pročitaj više →</a>
          </div>
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

  <!-- Ručno dodani PDF/vanjski sadržaji -->
  <div class="blog-list-item">
    <div class="blog-list-thumb">
      <a href="https://repozitorij.ijf.hr/articles/ijf:1154/show-file/0" target="_blank" rel="noopener">
        <img src="/assets/blog/subvencije.png" alt="Subvencije cijena energenata">
      </a>
    </div>
    <div class="blog-list-text">
      <a href="https://repozitorij.ijf.hr/articles/ijf:1154/show-file/0" target="_blank" rel="noopener" class="blog-list-title">Subvencije cijena energenata</a>
      <div class="blog-list-date">PDF • Otvara se vanjski link</div>
      <div class="blog-list-excerpt">Analiza subvencija cijena energenata i njihov utjecaj na tranziciju.</div>
      <div style="margin-top: 8px;">
        <a href="https://repozitorij.ijf.hr/articles/ijf:1154/show-file/0" target="_blank" rel="noopener" class="blog-list-readmore">Otvori PDF →</a>
      </div>
    </div>
  </div>

  <div class="blog-list-item">
    <div class="blog-list-thumb">
      <a href="https://hrcak.srce.hr/file/465846" target="_blank" rel="noopener">
        <img src="/assets/blog/fiscus.png" alt="Analiza EU ETS">
      </a>
    </div>
    <div class="blog-list-text">
      <a href="https://hrcak.srce.hr/file/465846" target="_blank" rel="noopener" class="blog-list-title">Analiza EU ETS</a>
      <div class="blog-list-date">PDF • Otvara se vanjski link</div>
      <div class="blog-list-excerpt">Analiza učinaka EU ETS sustava.</div>
      <div style="margin-top: 8px;">
        <a href="https://hrcak.srce.hr/file/465846" target="_blank" rel="noopener" class="blog-list-readmore">Otvori PDF →</a>
      </div>
    </div>
  </div>

  <div class="blog-list-item">
    <div class="blog-list-thumb">
      <a href="https://arhivanalitika.hr/blog/financira-li-se-prihodima-od-prodaje-emisijskih-dozvola-energetska-tranzicija-ili-odrzava-status-quo/" target="_blank" rel="noopener">
        <img src="/assets/blog/emisijske-dozvole.png" alt="Prihodi od emisijskih dozvola">
      </a>
    </div>
    <div class="blog-list-text">
      <a href="https://arhivanalitika.hr/blog/financira-li-se-prihodima-od-prodaje-emisijskih-dozvola-energetska-tranzicija-ili-odrzava-status-quo/" target="_blank" rel="noopener" class="blog-list-title">Prihodi od emisijskih dozvola i tranzicija</a>
      <div class="blog-list-date">Eksterni članak • Otvara se vanjski link</div>
      <div class="blog-list-excerpt">Analiza korištenja prihoda od prodaje emisijskih dozvola.</div>
      <div style="margin-top: 8px;">
        <a href="https://arhivanalitika.hr/blog/financira-li-se-prihodima-od-prodaje-emisijskih-dozvola-energetska-tranzicija-ili-odrzava-status-quo/" target="_blank" rel="noopener" class="blog-list-readmore">Otvori članak →</a>
      </div>
    </div>
  </div>

  <div class="blog-list-item">
    <div class="blog-list-thumb">
      <a href="https://repozitorij.ijf.hr/articles/ijf:965/show-file/0" target="_blank" rel="noopener">
        <img src="/assets/blog/porezi.png" alt="Okolišni porezi">
      </a>
    </div>
    <div class="blog-list-text">
      <a href="https://repozitorij.ijf.hr/articles/ijf:965/show-file/0" target="_blank" rel="noopener" class="blog-list-title">Okolišni porezi</a>
      <div class="blog-list-date">PDF • Otvara se vanjski link</div>
      <div class="blog-list-excerpt">Osvrt na okolišne poreze i implikacije za fiskalnu politiku.</div>
      <div style="margin-top: 8px;">
        <a href="https://repozitorij.ijf.hr/articles/ijf:965/show-file/0" target="_blank" rel="noopener" class="blog-list-readmore">Otvori PDF →</a>
      </div>
    </div>
  </div>
</div>
