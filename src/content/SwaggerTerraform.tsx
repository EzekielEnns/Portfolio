import ProjectCard from "components/ProjectCard";
import { Tags } from "content/tags";

export default function SwaggerTerraform(props: { af: Set<string> }) {
  return (
    <ProjectCard
      af={props.af}
      tags={[Tags.DevOps, Tags.SaySo]}
      src=""
      title="Linking OpenApi with Terraform"
    >
      Noticing a discussion on the Terraform github repo I created this example
      project to show case how to improve deployment speed for REST API's, it
      simply takes injects your rest requirements into an open api spec and
      use's Terraform to inject them back so that all your endpoints are
      properly typed and good to go in OpenApi format
    </ProjectCard>
  );
}
