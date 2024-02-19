---
layout: base
---

I am a creative builder interested in A(G)I, NLP, generative AI, efficient data modeling, and applications of algorithms. I love to work on research, product, and nice problems.
I also love philosophy and to think. 

I am currently working on AI inference research at [OpenMachine](https://openmachine.ai) and pursuing independent research on various technologies.

I am building [Lipsti.cc](https://lipsti.cc) on the side, a research studio building AI experiences to augment human thought and creativity. 
Check out our first flagship product, [TextbookGPT](https://book.lipsti.cc).

Previously an engineering summer apprentice at Google. Developed [Classframe](https://aarushgupta.com/classframe).

I like to imagine that the growth of my projects over time represents how much I've learned over the years.

<div class = "projects">
{% for project in site.data.projects %}
<span class = "date">
<span class = "desc">{{ project.desc }}</span>
{{ project.year }}
</span>

{% if project.url %}
<a href = "{{ project.url }}">{{ project.name }}</a>
{% else %}
<p>{{ project.name }}</p>
{% endif %}
{% if project.status %}<span class = "status">{{ project.status }}</span>{% endif %}
<br><br>

{% endfor %}
</div>

<img src = "{{ "/assets/header.jpg" | relative_url }}">
<p class = "caption">Hieronymus Bosch</p>

<footer>
    <a href = "https://twitter.com/notallm" target = "_blank"><i class = "bi bi-twitter"></i></a>
    <a href = "https://github.com/notallm" target = "_blank"><i class = "bi bi-github"></i></a>
    <a href = "https://linkedin.com/in/aarushgupta001" target = "_blank"><i class = "bi bi-linkedin"></i></a>
    <a href = "mailto:hi@aarushgupta.com" target = "_blank"><i class = "bi bi-envelope-fill"></i></a>
</footer>
