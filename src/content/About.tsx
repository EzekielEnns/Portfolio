import { ProjectExpandView } from "components/ProjectExpandedView";
export function About() {
  return (
    //TODO remove af from here
    <ProjectExpandView af={new Set()} tags={[]} src="" title="About Me">
      Take the perfect hire and they will grow your company far beyond what you
      could ever dream. Having started out I.T. I not only got the know how I
      also got the skills. - Lead Developer SaySo (what was that like) - Main
      Developer in charge of our react library at CkSoftware - Expert at client
      relationships, constantly I'm interfacing with CEO's to try and meet their
      needs with software - I love Cats + DnD + Coding
    </ProjectExpandView>
  );
}
