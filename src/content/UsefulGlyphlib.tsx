import ProjectCard from "components/ProjectCard";
import asset from "./assets/glyphlib.png";

export default function UsefulGlyphlib(props: { af: Set<string> }) {
  return (
    <ProjectCard
      git="https://github.com/EzekielEnns/glyphlib"
      af={props.af}
      demo="https://github.com/EzekielEnns/glyphlib/blob/main/glyph.gif"
      tags={["JavaScript", "Developer Tools"]}
      src={asset}
      title="WebGL Text Renderer for Classic Game UIs"
    >
      I created a browser library for building classic “terminal-style” game
      interfaces (think{" "}
      <a href="https://en.wikipedia.org/wiki/NetHack" target="_blank">
        Nethack
      </a>{" "}
      or{" "}
      <a href="https://en.wikipedia.org/wiki/Dwarf_Fortress" target="_blank">
        Dwarf Fortress
      </a>
      ). It uses WebGL to render text and manage every character cell
      individually, so you can create grid-based games with retro visuals, all
      inside your browser.
    </ProjectCard>
  );
}
