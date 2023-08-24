---
layout: base
title: Home
header_links:
    - name: LinkedIn
      url: https://www.linkedin.com/in/aarushgupta001
    - name: GitHub
      url: https://github.com/notallm
    - name: X
      url: https://twitter.com/notallm
    - name: hi@aarushgupta.com
      url: mailto:hi@aarushgupta.com
---

Class of 2026 @ Irvington High, interested in A(G)I, NLP, generative AI, alignment, and applications of algorithms.

Currently a Corporate Engineering Apprentice @ [Google](https://google.com/), learning engineering and product management.

Leading a team of 5 and developing the full-stack product behind [ClassFrame](https://classfra.me).

Previously founder @ [MemorAI](https://memorai.aarushgupta.com), leading it to ~170 users from Irvington and ~140 others globally.

AI research @ [Mui Lab](https://sites.google.com/asdrp.org/mui), working with [Dr. Phil Mui](https://sites.google.com/asdrp.org/mui/who) on LLMs
and transformers.

Running [NXT AI](https://nxtaicamp.com), where I manage operations, focus on growth, partner with organizations, and mentor batches.

Developing open-source projects for fun, including [Vektor](https://github.com/notallm/vektor), [Codebuddy](https://github.com/notallm/codebuddy),
[Sanity](https://github.com/notallm/sanity), and [Oscar](https://github.com/notallm/oscar).

### Posts

*New posts incoming soon*. Subscribe to the RSS feed [here](/feed.xml).

{% assign posts = site.posts %}

{%- for post in posts -%}

<!-- {% if post.featured %}\*{% else %}&nbsp;{% endif %} -->
{{ post.date | date: "%b %d" }} [{{ post.title | escape }}]({{ post.url | relative_url }})
<br>

{%- endfor -%}
