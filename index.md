---
layout: base
title: Home
---

[LinkedIn](https://www.linkedin.com/in/aarushgupta001) &middot; [GitHub](https://github.com/notallm) &middot; [hi@aarushgupta.com](mailto:hi@aarushgupta.com)

C/o 2026 at Irvington High School, interested in A(G)I, NLP, generative AI, alignment, and applications of algorithms.

Currently a Corporate Engineering Apprentice @ [Google](https://google.com/), learning marketing, engineering, 
project management, and financial planning from professionals to develop powerful tools.

Previously founder @ [MemorAI](https://memorai.aarushgupta.com), leading it to ~170 users from Irvington and ~140 others globally.

AI research @ [Mui Lab](https://sites.google.com/asdrp.org/mui), working with [Dr. Phil Mui](https://sites.google.com/asdrp.org/mui/who) on systems to improve
AI for everyone.

Running [NXT AI](https://nxtai.aarushgupta.com), where I manage operations, focus on growth, partner with organizations, and mentor batches.

Developing open-source projects for fun, [Vektor](https://github.com/notallm/vektor) and [Codebuddy](https://github.com/notallm/codebuddy).

Previously developed tools across many domains of computer science, including [Sanity](https://github.com/notallm/sanity) and [Oscar](https://github.com/notallm/oscar).

### Posts

Subscribe to the RSS feed [here](/feed.xml).

{% assign posts = site.posts %}
{%- assign date_format = "%b %-d" -%}

**Featured**
<br>

{%- for post in posts -%}

{% if post.featured %}
{{ post.date | date: date_format }} [{{ post.title | escape }}]({{ post.url | relative_url }}) 
<br>

{% endif %}

{%- endfor -%}

**All**
<br>

{%- for post in posts -%}

{{ post.date | date: date_format }} [{{ post.title | escape }}]({{ post.url | relative_url }}) 
<br>


{%- endfor -%}
