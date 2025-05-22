import ProjectCard from "components/ProjectCard";
import { Tags } from "content/tags";

export default function LearnWebRtc(props: { af: Set<string> }) {
  return (
    <ProjectCard
      af={props.af}
      tags={[
        Tags.SaySo,
        Tags.JavaScript,
        Tags.Golang,
        Tags.RealTime,
        Tags["Developer Tools"],
      ]}
      src=""
      title="Growing WebRtc"
    >
      Notoriously complicated, WebRtc is a (kinda)low level network protocol on
      our browsers, as a attempt to make the process of learning WebRtc easier i
      made a simple repo displaying how easy it can be to make your own peer to
      peer network.
    </ProjectCard>
  );
}
