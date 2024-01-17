---
layout: ../../layouts/markdown.astro
title: "GPU accelerated Text"
tags: [ WebGL, JavaScript, Linear Algerbra]
git:  https://github.com/EzekielEnns/glyphlib
---
# Problem
Making Tui or Ascii style graphics in the browser is not easily done.
Due to the lack of individual character control,
you either need to manage css and js styling in a very over handed way or
use something like webgl, but libs that use webgl
like 3js and pixijs render pure strings instead of characters. 
I needed to make a library that enabled me to have per character control.

# Outcomes
![Demo](https://github.com/EzekielEnns/glyphlib/blob/main/glyph.gif?raw=true)
the api is very simple, it works based on layers, you have a control object that manages the 
state of the webgl2 context, a layer which manages the text you want to render (*new layers
are on top of older layers*) and webgl data buffers are mapped to indivisual characters 
so that you can control how they work.

# Conclusion
Graphics programming is a lot like embedded system programming,
there are magic numbers and all you really need to do is read the fricking manual.
