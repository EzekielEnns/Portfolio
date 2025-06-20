import ProjectCard from "components/ProjectCard";
import asset from "./assets/warmupjs.png";
export default function WarmupJs(props: { af: Set<string> }) {
  return (
    <ProjectCard
      af={props.af}
      git="https://github.com/EzekielEnns/warmupjs"
      tags={["JavaScript", "Typescript", "DevOps", "SaySo", "Developer Tools"]}
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
