---
layout: post
title: Lions and tigers and Jekylls, oh my!
tags: blogging, jekyll
published: true
---

<p>This is the first post in a blog that is the result of some experimentation into methods of creating and maintaining simple blogs. This experience started with some of the mainstream blogging platforms such as Wordpress and Tumblr, continued into exploration into the open-source realm of the Ghost blogging platform, and finally settled on Jekyll/Github Pages.</p>

<h4> What I was looking for </h4>

<ul>
  <li>Free/really cheap hosting without ads</li>
  <li>Open-source</li>
  <li>Integration with Github</li>
  <li>Some, but not a ton of coding</li>
  <li>Ability to use some elements from Bootstrap or other mainstream frameworks</li>
</ul>

<h4> Things I had to consider about myself </h4>

<ul>
  <li>I have a background in design, but I'm not a designer</li>
  <li>I only have a basic working knowledge of Ruby and PHP</li>
  <li>I want to have a lot of control over the layout and functionality</li>
  <li>I want to write Javascript</li>
  <li>I'm ultimately lazy about writing blog content and it's going to have
    to be easy/fun to post</li>
</ul>

<h4> Benefits of Jekyll </h4>

<ul>
  <li>It is written in Ruby, but you don't actually need to know Ruby to use it</li>
  <li>Github pages offers free-hosting and uses Jekyll to generate static web pages </li>
  <li>It's ridiculously simple to setup a development environment</li>
  <li>Github pages has a bunch of basic themes that you can use for
    a decent-looking place to start</li>
  <li>The official <a href="http://jekyllrb.com/">Jekyll</a> web site looks great and
    has a ton of documentation
  </li>
  <li>I was able to quickly find a lot of great examples of cool open-source
   blogs on Github and postings from other people talking in detail about how
   they worked on their blogs, like
   <a href="http://erjjones.github.io/blog/How-I-built-my-blog-in-one-day/">Eric Jones</a>
  </li>
</ul>

<h4> Postifying your Github page </h4>

<p>
  The Github pages by default uses Jekyll, so getting your basic theme page ready for
  blog posts is really easy:
</p>

<ul>
  <li>Install Jekyll (and Ruby if you don't have it already) using these
  <a href="https://help.github.com/articles/using-jekyll-with-pages#installing-jekyll">
  Instructions</a> or
  the <a href="http://jekyllrb.com/docs/quickstart/">quickstart</a></li>
  <li>Add the additional <a href="http://jekyllrb.com/docs/structure/">folders</a> to support
    blog posting</li>
  <li>Add some <a href="http://jekyllrb.com/docs/posts/">posts</a> (name format is really important here), and an index to your posts on one of your pages</li>
</ul>

<p>
  Even after including time to browse through the Jekyll documentation, setting up this
  basic blogging structure should only take a tech-savvy person less than an hour.
</p>

<h4> Grunts like a Jekyll </h4>

<p>
  I've found [Grunt](http://gruntjs.com/) to be a really useful tool for running some basic deployment
  tasks in Javascript. You'll need to be running [Node.js](http://www.nodejs.org) to get started
  on your local development environment, but then it's as easy as following the steps in the [documentation](http://gruntjs.com/getting-started). Using some of the many Grunt plugins, I was able to pretty easily add tasks to run compile my Less to css and deploy the result to my site. I also added the Jekyll build tasks to my Gruntfile so that I can completely manage the blog through Grunt. As with everything else in the
  evolution of this project, I plan to add more tasks and explore the power of Grunt.
</p>

<h4> The way forward </h4>

<p>
  As far as the look and feel of the blog, my very non-ambitious plan is to incorporate
  <a href="http://getbootstrap.com/">Twitter Bootstrap</a> into Jekyll templates. However, to get this
  started, I just created the most basic functioning blog that doesn't look awful.

  The very basic scaffolding is in place for npm and bower package management, and grunt tasks for Less compilation and some other cleanup. From this point, I've got to convert the css to Less, integrate Bootstrap with Bower, and finally add some personality in the way of code and graphics.

  This is likely just be the first phase of an ongoing project to keep improving this blog with newer and better tools that I'm trying out. It may also just be the temporary tinkering with Jekyll and may be re-written in a few months.
</p>

<p>See future posts for updates on the journey...</p>
