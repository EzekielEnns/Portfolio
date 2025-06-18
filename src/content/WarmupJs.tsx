import ProjectCard from "components/ProjectCard";
import { Tags } from "content/tags";
import asset from "./warmupjs.png";
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
      src={asset}
      title="Warming Up Serverless Functions with WarmUp JS"
    >
      WarmUp JS is a tiny tool I made to get serverless services ready to go
      before you need them. It wraps any async function, runs a quick warm-up
      step, and manages timing with localStorage, so your apps feel faster when
      users first log in.
    </ProjectCard>
  );
}
