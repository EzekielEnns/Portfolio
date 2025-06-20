import { ProjectExpandView } from "components/ProjectExpandedView";
import asset from "./assets/about.jpg";
export function About() {
  return (
    <ProjectExpandView af={new Set()} tags={[]} src={asset} title="About Me">
      Hey, I’m Ezekiel. I turn ideas into working software, from browser games
      to backend APIs and everything in between. I like solving tricky problems,
      learning new stacks, and keeping things simple (and fast). When I’m not at
      my keyboard, you’ll find me trying new coffee hacks or tinkering with my
      home network.
    </ProjectExpandView>
  );
}
