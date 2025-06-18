import ProjectCard from "components/ProjectCard";
import { Tags } from "content/tags";
import asset from "./glyphlib.png";

export default function UsefulGlyphlib(props: { af: Set<string> }) {
  return (
    <ProjectCard
      af={props.af}
      tags={[Tags.JavaScript, Tags["Developer Tools"]]}
      src={asset}
      title="WebGL Text Renderer for Classic Game UIs"
    >
      I created a browser library for building classic “terminal-style” game
      interfaces (think Nethack or Dwarf Fortress). It uses WebGL to render text
      and manage every character cell individually, so you can create grid-based
      games with retro visuals, all inside your browser.
    </ProjectCard>
  );
}
