---
layout: base
---

I am a creative builder interested in A(G)I, NLP, generative AI, efficient data modelling, and applications of algorithms. I love to work on research, product, and nice problems.

I am currently working on [Lipsti.cc](https://lipsti.cc), a venture studio building high-impact AI products and experiences.
Check out our first flagship product, [TextbookGPT](https://book.lipsti.cc).

Previously an engineering summer apprentice at Google. Developed [Classframe](https://aarushgupta.com/classframe).

I like to think the growth of my projects over time represents just how much I've learned over the years.

<div class = "projects">
{% for project in site.data.projects %}
<span class = "date"><span class = "desc">{{ project.desc }}</span>{{ project.year }}</span>

{% if project.url %}
<a href = "{{ project.url }}">{{ project.name }}</a>

{% else %}
<p>{{ project.name }}</p>

{% endif %}
<br><br>

{% endfor %}
</div>

<footer>
    <a href = "https://twitter.com/notallm" target = "_blank"><i class = "bi bi-twitter"></i></a>
    <a href = "https://github.com/notallm" target = "_blank"><i class = "bi bi-github"></i></a>
    <a href = "https://linkedin.com/in/aarushgupta001" target = "_blank"><i class = "bi bi-linkedin"></i></a>
    <a href = "mailto:hi@aarushgupta.com" target = "_blank"><i class = "bi bi-envelope-fill"></i></a>
</footer>
