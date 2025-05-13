import { Box, Cluster } from "@styled-system/jsx";
import { ProjectMedia } from "components/ProjectMedia";
import { ProjectTag } from "components/ProjectTag";
import { ReactNode } from "react";

type Props = {
  tags: string[];
  children: ReactNode;
  src: string;
};
export default function ProjectCard(props: Props) {
  return (
    <Box>
      <ProjectMedia src={props.src} />
      <Cluster mt={".5ch"} spacing={".5ch"}>
        {props.tags.map((r, i) => (
          <ProjectTag key={`${i}-${props.children}`}>{r}</ProjectTag>
        ))}
        <ProjectTag>CkSoftware</ProjectTag>
        <ProjectTag>React</ProjectTag>
        <ProjectTag>TypeScript</ProjectTag>
      </Cluster>
      <Box border={"none"}>
        <p>{props.children}</p>
      </Box>
    </Box>
  );
}
