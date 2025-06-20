import ProjectCard from "components/ProjectCard";
import asset from "./assets/workers.png";
export default function CkEzWebWorkers(props: { af: Set<string> }) {
  return (
    <ProjectCard
      af={props.af}
      tags={["CkSoftware", "JavaScript", "Typescript", "Developer Tools"]}
      src={asset}
      title=" Zero-Hassle Multi-Threading for the Web"
    >
      Ever wish you could write fast, multi-threaded code in the browser without
      managing two codebases? I built a runtime tool that automatically turns
      your functions into web workers using blobs, so you get the performance of
      multi-threading without the extra hassle. Debugging isn’t always perfect,
      but you don’t have to worry about deploying extra files.
    </ProjectCard>
  );
}
