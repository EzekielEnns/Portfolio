import { Box, Stack, Cluster, styled } from "@styled-system/jsx";
import { ProjectCardProps } from "components/ProjectCard";
import { ProjectMedia } from "components/ProjectMedia";
import { ProjectTag } from "components/ProjectTag";
import { Title } from "components/ProjectTitle";

export const ProjectExpandView = (
  props: ProjectCardProps & { onClick?: () => void },
) => {
  return (
    <Box bgColor={"white"} h={"90vh"}>
      <Title hideLinks>Project Title</Title>
      <Box border={"none"}>
        <Stack spacing={"0.5rem"}>
          <Box h={"50vh"}>
            <ProjectMedia
              h="100%"
              w="100%"
              src={props.src}
              onClick={props.onClick}
            />
          </Box>
          <Cluster mt={".5ch"} spacing={".5ch"}>
            {props.tags.map((r, i) => (
              <ProjectTag key={`${i}-${props.children}`}>{r}</ProjectTag>
            ))}
            <ProjectTag>CkSoftware</ProjectTag>
            <ProjectTag>React</ProjectTag>
            <ProjectTag>TypeScript</ProjectTag>
          </Cluster>
          <styled.p>{props.children}</styled.p>
        </Stack>
      </Box>
    </Box>
  );
};
