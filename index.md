---
layout: base
title: Home
header_links:
    - name: LinkedIn
      url: https://www.linkedin.com/in/aarushgupta001
    - name: GitHub
      url: https://github.com/notallm
    - name: hi@aarushgupta.com
      url: mailto:hi@aarushgupta.com
---

C/o 2026 at Irvington High School, interested in A(G)I, NLP, generative AI, alignment, and applications of algorithms.

Currently a Corporate Engineering Apprentice @ [Google](https://google.com/), learning marketing, engineering, 
project management, and financial planning from professionals to develop powerful tools.

Previously founder @ [MemorAI](https://memorai.aarushgupta.com), leading it to ~170 users from Irvington and ~140 others globally.

AI research @ [Mui Lab](https://sites.google.com/asdrp.org/mui), working with [Dr. Phil Mui](https://sites.google.com/asdrp.org/mui/who) on systems to improve
AI for everyone.

Running [NXT AI](https://nxtai.aarushgupta.com), where I manage operations, focus on growth, partner with organizations, and mentor batches.

Developing open-source projects for fun, including [Vektor](https://github.com/notallm/vektor), [Codebuddy](https://github.com/notallm/codebuddy),
[Sanity](https://github.com/notallm/sanity), and [Oscar](https://github.com/notallm/oscar).

Fun fact: this site gets 60k unique viewers and 1.6m requests annually (according to Cloudflare)

### Posts

Subscribe to the RSS feed [here](/feed.xml).

{% assign posts = site.posts %}
{%- assign date_format = "%b %d" -%}

{%- for post in posts -%}

<!-- {% if post.featured %}\*{% else %}&nbsp;{% endif %} -->
{{ post.date | date: date_format }} [{{ post.title | escape }}]({{ post.url | relative_url }})
<br>

{%- endfor -%}
