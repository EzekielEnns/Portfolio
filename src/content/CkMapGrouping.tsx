import ProjectCard from "components/ProjectCard";
import { Tags } from "content/tags";

export default function CkMapGrouping(props: { af: Set<string> }) {
  return (
    <ProjectCard
      af={props.af}
      tags={[Tags.React, Tags.CkSoftware, Tags.JavaScript, Tags.Typescript]}
      src=""
      title="Map Clustering"
    >
      I nearly 10x performance by implementing my own dbScan Algorithm and
      making use of tan virtual; The map would crash on travel agents if they
      didn't have enough filters active, the solution: cluster hotels that are
      close together and limit renders.
    </ProjectCard>
  );
}
