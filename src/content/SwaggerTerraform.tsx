import ProjectCard from "components/ProjectCard";
import { Tags } from "content/tags";
import asset from "./terraform.png";
export default function SwaggerTerraform(props: { af: Set<string> }) {
  return (
    <ProjectCard
      af={props.af}
      git="https://github.com/EzekielEnns/Terraform-Rest-Aws"
      tags={[Tags.DevOps, Tags.SaySo]}
      src={asset}
      title="Deploying a Go REST API with Just Terraform"
    >
      This project shows how to set up an entire Go API on AWS automatically
      using Terraform. It packages server code as Lambda functions and connects
      everything through API Gateway, with a full OpenAPI spec for easy code
      generation. The result? You get a serverless API that’s easy to build,
      update, and extend—perfect for modern cloud projects.
    </ProjectCard>
  );
}
