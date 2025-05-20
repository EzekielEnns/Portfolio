import ProjectCard from "components/ProjectCard";
import { Tags } from "content/tags";

export default function CkWorklfow(props: { af: Set<string> }) {
  return (
    <ProjectCard
      af={props.af}
      tags={[Tags.React, Tags.CkSoftware, Tags.RealTime, Tags.Typescript]}
      src=""
      title="A Realtime suckage"
    >
      TODO
    </ProjectCard>
  );
}
