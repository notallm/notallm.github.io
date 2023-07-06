---
layout: base
title: Home
---

[LinkedIn](https://www.linkedin.com/in/aarushgupta001) &middot; [GitHub](https://github.com/notallm) &middot; [hi@aarushgupta.com](mailto:hi@aarushgupta.com)

C/o 2026 at Irvington High School, interested in A(G)I, NLP, generative AI, alignment, and applications of algorithms.

Currently a Corporate Engineering Apprentice @ [Google](https://google.com/), learning marketing, engineering, project management, and financial planning.

Previously founder @ [MemorAI](https://memorai.aarushgupta.com), leading it to ~170 users from Irvington and ~140 others globally.

AI research @ [Mui Lab](https://sites.google.com/asdrp.org/mui), working on systems to improve AI for everyone.

Running [NXT AI](https://nxtai.aarushgupta.com), where I manage operations, focus on growth, partner with organizations, and mentor batches.

Working on open-source projects for fun, including [Vektor](https://github.com/notallm/vektor) and [Codebuddy](https://github.com/notallm/codebuddy).

### Posts
_\*: featured_

{% assign posts = site.posts %}
{%- assign date_format = "%b %-d, %Y" -%}
{%- for post in posts -%}

*{{ post.date | date: date_format }}* {% if post.featured == true %}\*{% endif %} [{{ post.title | escape }}]({{ post.url | relative_url }}) 
<br>

{%- endfor -%}
