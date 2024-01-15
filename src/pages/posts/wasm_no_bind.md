---
layout: ../../layouts/markdown.astro
title: "Debloating Assembly"
tags: [Web Assembly, Rust, Memory Managment, JavaScript]
git:  https://github.com/EzekielEnns/glyphlib
---

# Problem
I wanted to prove how easy it is to integrate Web Assembly into a project,
without using the `wasm-bindgen`

# Outcomes
a very complex demo of how `wasm-bindgen` is incredibly important,
this demo reads raw memory locations and directly has to translate binary
into something meaningful either in the rust backend or the JavaScript frontend.
[use hjkl to move in this demo](https://ezekielenns.github.io/example_wasm_no_bindgen/)

# Conclusion
turns out Web Assembly is like running a executable in a virtual enviroment, in the browser
this is like creating your own runtime for that enviroment but inside JavaScript,
that means you have to create your own memeory allocator and control scheme all inside 
js. [this really good post covers so much more about it](https://surma.dev/things/rust-to-webassembly/)
I cant wait to make more cool tech with Web Assembly.
