---
layout: ../../layouts/markdown.astro
title: "\"Free\" Server"
tags: [ webrtc, web sockets, js, golang, server, client side, js Doc ]
git:  https://github.com/EzekielEnns/example_webrtc2
---
# Problem
there are not any good examples of simple WebRTC applications,
*WebRTC is a peer to peer API defined in W3C spec, all browsers should support it*

# Outcomes
Built a Golang server that handles signaling for peer connections. 
Found out very little in documentation of changes to ICE protocol and had to create a 
work-around to handle the new way RTC Peers work with trickle ICE

Created a simple frontend, using tailwind and Js Doc for types,
this very minimal example deals with: trickle ice, candidate gathering and onboarding new peers.

# Conclusion
Peer to Peer servers are often overcomplicated. The hardest part of P2P is that 
we need to handle the signaling phase and deployment of the main server, turn server and ICE server.
Furthermore, the next hardest part is dealing with multiple socket connections

I look forward to using P2P tech in other side projects, Wrapper libraries are definitely 
really useful, but I believe they tend to be over done.
