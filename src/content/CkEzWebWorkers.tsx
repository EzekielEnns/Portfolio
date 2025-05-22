import ProjectCard from "components/ProjectCard";
import { Tags } from "content/tags";

export default function CkEzWebWorkers(props: { af: Set<string> }) {
  return (
    <ProjectCard
      af={props.af}
      tags={[
        Tags.CkSoftware,
        Tags.JavaScript,
        Tags.Typescript,
        Tags["Developer Tools"],
      ]}
      src=""
      title="Lazy Webworkers"
    >
      Get the best of both worlds! A fast site that leverages the power of multi
      threaded programming, while not having to maintain a separate code base
      for your workers. This is pretty much a run time "transpiler",
      stringifiying your worker code and then hosting it in a blob so it can
      run. Debugging might suck but at least you don't need to update your
      hosting
    </ProjectCard>
  );
}
