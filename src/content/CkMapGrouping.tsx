import ProjectCard from "components/ProjectCard";
import { Tags } from "content/tags";
import asset from "./map.png";

export default function CkMapGrouping(props: { af: Set<string> }) {
  return (
    <ProjectCard
      af={props.af}
      tags={[Tags.React, Tags.CkSoftware, Tags.JavaScript, Tags.Typescript]}
      src={asset}
      title="10x Faster Maps for Travel Agents"
    >
      When a map feature started crashing for users with too much data, I fixed
      it by clustering nearby hotels together and only rendering what was
      needed. This involved building my own DBSCAN algorithm and using smart
      rendering techniques. The end result: the map loads smoothly, even with
      tons of hotels—no more crashes.
    </ProjectCard>
  );
}
