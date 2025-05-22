import ProjectCard from "components/ProjectCard";
import { Tags } from "content/tags";

export default function UsefulGlyphlib(props: { af: Set<string> }) {
  return (
    <ProjectCard
      af={props.af}
      tags={[Tags.JavaScript, Tags["Developer Tools"]]}
      src=""
      title="Super Fonts"
    >
      In need of a tool to render text using the GPU I developed this library,
      100% Js, it comes with its own shader's and only depends on a package to
      read font files
    </ProjectCard>
  );
}
