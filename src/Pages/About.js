import React from 'react';
import Info from '../Components/Info.js';
import C0 from '../Resources/Casual0.png';
import C1 from '../Resources/Casual1.jpg';
import C2 from '../Resources/Casual2.jpg';
function About(){
    return(<div>
	       <Info align='Right' img={C0}>
{`## Who am I?
im a passionate programer who wants to work for your company!`}
	       </Info>
	       <Info align='Left' img={C1}>
{`## Experince
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu nibh nec nisl eleifend volutpat. Fusce quis viverra leo. Nam nec nisi maximus, rutrum ante id, bibendum erat. Donec et augue vel velit porta vehicula sit amet id dolor. Fusce leo ipsum, facilisis eget tristique ut, tincidunt eget arcu. Sed egestas ornare hendrerit. Aenean blandit metus lorem, quis eleifend mauris commodo sit amet. Nulla quis diam pretium, dignissim tortor a, lobortis sem. Sed id sagittis neque.`}
	       </Info>
	   <Info align='Right' img={C2}>
{`## Experince
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu nibh nec nisl eleifend volutpat. Fusce quis viverra leo. Nam nec nisi maximus, rutrum ante id, bibendum erat. Donec et augue vel velit porta vehicula sit amet id dolor. Fusce leo ipsum, facilisis eget tristique ut, tincidunt eget arcu. Sed egestas ornare hendrerit. Aenean blandit metus lorem, quis eleifend mauris commodo sit amet. Nulla quis diam pretium, dignissim tortor a, lobortis sem. Sed id sagittis neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu nibh nec nisl eleifend volutpat. Fusce quis viverra leo. Nam nec nisi maximus, rutrum ante id, bibendum erat. Donec et augue vel velit porta vehicula sit amet id dolor. Fusce leo ipsum, facilisis eget tristique ut, tincidunt eget arcu. Sed egestas ornare hendrerit. Aenean blandit metus lorem, quis eleifend mauris commodo sit amet. Nulla quis diam pretium, dignissim tortor a, lobortis sem. Sed id sagittis neque.`}
	       </Info>
	   </div>);
}

export default About
