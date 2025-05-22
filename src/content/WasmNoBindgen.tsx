import ProjectCard from "components/ProjectCard";
import { Tags } from "content/tags";

export default function WasmNoBindgen(props: { af: Set<string> }) {
  return (
    <ProjectCard
      af={props.af}
      tags={[Tags.JavaScript, Tags.Rust]}
      src=""
      title="Browser Bare Metal"
    >
      Ever wanted to manage pointers in your browser? Well look no further this
      project was a nice experiment with using raw WASM for a small purpose game
      engine.
    </ProjectCard>
  );
}
