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
[check out vid here](https://github-production-user-asset-6210df.s3.amazonaws.com/54285948/293038993-c3b86ba4-dafd-460e-a2be-c5fa767664c7.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240115T184955Z&X-Amz-Expires=300&X-Amz-Signature=5ba1d62dd9ec5ea1b1b3a15698593ff54de94989927f596b89fa7db0524102c8&X-Amz-SignedHeaders=host&actor_id=54285948&key_id=0&repo_id=709002913)
the api is very simple, it works based on layers, you have a control object that manages the 
state of the webgl2 context, a layer which manages the text you want to render (*new layers
are on top of older layers*) and webgl data buffers are mapped to indivisual characters 
so that you can control how they work.

# Conclusion
Graphics programming is a lot like embedded system programming,
there are magic numbers and all you really need to do is read the fricking manual.
