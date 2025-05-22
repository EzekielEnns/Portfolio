import ProjectCard from "components/ProjectCard";
import { Tags } from "content/tags";

export default function CkWorklfow(props: { af: Set<string> }) {
  return (
    <ProjectCard
      af={props.af}
      tags={[
        Tags.CSharp,
        Tags.React,
        Tags.CkSoftware,
        Tags.RealTime,
        Tags.Typescript,
      ]}
      src=""
      title="Employee Tracker"
    >
      The Sales team had a tracker that would show their progress, by reworking
      the data flow I was able to decrease development time, 3 weeks to fix an
      issue in this feature became 2 days (a 110% decrease in time). It worked
      by using server side sync events, these moved data flow off the client and
      entirely onto the server, letting me isolate bugs to be either data coming
      in or data coming out
    </ProjectCard>
  );
}
