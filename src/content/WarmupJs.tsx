import ProjectCard from "components/ProjectCard";
import { Tags } from "content/tags";

export default function WarmupJs(props: { af: Set<string> }) {
  return (
    <ProjectCard
      af={props.af}
      tags={[
        Tags.JavaScript,
        Tags.Typescript,
        Tags["Developer Tools"],
        Tags.DevOps,
        Tags.SaySo,
      ]}
      src=""
      title="WarmupJs"
    >
      Ever needed to cut cloud costs using a serverless db? Well good luck if
      you don't use this, these ~10 lines of code. Serverless db's tend to have
      to be running first in order for you to use them, this incurs cost, to get
      around this i made this package to hit a warm up endpoint, differing your
      db reliant code to after the warmup endpoint returns the clear
    </ProjectCard>
  );
}
