import ProjectCard from "components/ProjectCard";
import { Tags } from "content/tags";
import asset from "./WebRtc.png";

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
      src={asset}
      title="Real-Time Peer-to-Peer Chat in the Browser"
    >
      I built a simple chat app where people can message each other directly,
      right in their browsers—no downloads needed. The back end uses a tiny Go
      server to connect people, but once that’s done, messages go straight from
      one user to another. The site is made with plain JavaScript and a bit of
      Tailwind CSS for color and style. This project was a fun experiment to see
      just how easy real-time, private messaging can be.
    </ProjectCard>
  );
}
