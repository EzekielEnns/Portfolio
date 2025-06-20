import ProjectCard from "components/ProjectCard";
import { Tags } from "content/tags";
import asset from "./wasmnobindgen.png";

export default function WasmNoBindgen(props: { af: Set<string> }) {
  return (
    <ProjectCard
      git="https://github.com/EzekielEnns/example_wasm_no_bindgen"
      demo="https://ezekielenns.github.io/example_wasm_no_bindgen/"
      af={props.af}
      tags={[Tags.JavaScript, Tags.Rust]}
      src={asset}
      title="Tiny Rust Game Engine in Your Browser"
    >
      This demo lets you play a simple text-based grid game—just move the “@”
      symbol using your keyboard, right in the browser. It uses Rust compiled to
      WebAssembly, with a TypeScript loader that fetches and connects
      everything. It’s a neat example of bringing high-performance Rust code
      into modern web pages.
    </ProjectCard>
  );
}
