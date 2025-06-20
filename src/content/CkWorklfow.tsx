import ProjectCard from "components/ProjectCard";
import asset from "./assets/tracker.png";

export default function CkWorklfow(props: { af: Set<string> }) {
  return (
    <ProjectCard
      af={props.af}
      tags={["CSharp", "React", "CkSoftware", "RealTime", "Typescript"]}
      src={asset}
      title="Sales Tracker Overhaul Weeks of Work Down to Days"
    >
      The sales team’s progress tracker was slow to update and a pain to fix. I
      redesigned it to handle all the syncing on the server, instead of the
      client. Now, updates that used to take weeks can be done in a couple of
      days, making the team much more agile.
    </ProjectCard>
  );
}
