import React from 'react';
import Info from '../Components/Info.js';
import C0 from '../Resources/Casual0.png';
import C1 from '../Resources/Casual1.jpg';
import C2 from '../Resources/Casual2.jpg';
function About(){
    return(<div>
	       <Info align='Right' img={C0}>
{`## Who am I?
I love technology, and more importantly I love programing.
Theres nothing like looking up a new technology and spending hours maybe even
days reading through documentation, experimenting with it and using it to developing software.
Im constantly trying new things and looking for the best way to write good code. 
When you hire me you get someone who is dedicated and passionate about what he dose!`}
	       </Info>
	       <Info align='Left' img={C1}>
{`## Social Life
Communication is the key to sucess and I take pride in my social skills.
weather its talking to clients or teammates I try to be geneuine and direct.
I belive problems need to be talked about and resolved. Inorder to be productive
on a team you need to communicate and get to know eachother, I value work community
and can hardly wait to join yours`}
	       </Info>
	   <Info align='Right' img={C2}>
{`## Hobbies and intrests
Taking time for yourself is importnat, Im your tipical nerd 
I play video games, go wilderness hiking and do Linux Ricing. Coding also 
plays a big part in my personal life, if its building a webapp to hold 
D&D information or working on algorithum to automate video editing, Im always 
reading and checking out crazy new libaries or learning new langueges just to 
create something I enjoy, if you want I'll tell you all about it once you hire me.`}
	       </Info>
	   </div>);
}

export default About
