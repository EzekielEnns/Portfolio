import ProjectCard from "components/ProjectCard";
import { Tags } from "content/tags";

export default function CkMapGrouping(props: { af: Set<string> }) {
  return (
    <ProjectCard
      af={props.af}
      tags={[Tags.React, Tags.CkSoftware, Tags.JavaScript, Tags.Typescript]}
      src=""
      title="A Map of Doom"
    >
      TODO
    </ProjectCard>
  );
}
