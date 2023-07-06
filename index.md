---
layout: base
---

[LinkedIn](https://www.linkedin.com/in/aarushgupta001) &middot; [GitHub](https://github.com/notallm)

C/o 2026 at Irvington High School, interested in A(G)I, NLP, generative AI, alignment, and applications of algorithms.

Currently a Corporate Engineering Apprentice @ [Google](https://google.com/), learning marketing, engineering, project management, and financial planning.

Previously founder @ [MemorAI](https://memorai.aarushgupta.com), leading it to ~170 users from Irvington and ~140 others globally.

AI research @ [Mui Lab](https://sites.google.com/asdrp.org/mui), working on systems to improve AI for everyone.

Running [NXT AI](https://nxtai.aarushgupta.com) in my free time, an intensive summer online nonprofit AI camp for talented youth to help
students delve deeper into the subject, where I manage operations and focus on growth.

Working on open-source projects for fun, including [Vektor](https://github.com/notallm/vektor) and [Codebuddy](https://github.com/notallm/codebuddy).

### Posts
_\*: featured_

{% assign posts = site.posts %}
{%- assign date_format = "%b %-d, %Y" -%}
{%- for post in posts -%}

*{{ post.date | date: date_format }}* {% if post.featured == true %}\*{% endif %} [{{ post.title | escape }}]({{ post.url | relative_url }}) 
<br>

{%- endfor -%}
