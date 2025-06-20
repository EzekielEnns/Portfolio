import { Box, Stack, Cluster, styled } from "@styled-system/jsx";
import { type ProjectCardProps } from "components/ProjectCard";
import { ProjectMedia } from "components/ProjectMedia";
import { ProjectTag } from "components/ProjectTag";
import { Title } from "components/ProjectTitle";
import { Links, type LinksProps } from "./ProjectLinks";

export const ProjectExpandView = (
  props: LinksProps & ProjectCardProps & { onClick?: () => void },
) => {
  return (
    <Box bgColor={"white"} h={"90vh"} w={"100%"} overflow={"auto"}>
      <Title hideLinks>{props.title}</Title>
      <Box border={"none"}>
        <Stack spacing={"0.5rem"}>
          <Stack>
            <Box w={"fit-content"} alignSelf={"center"}>
              <ProjectMedia
                h="50vh"
                objPos={"center"}
                objFit={"contain"}
                src={props.src}
                onClick={props.onClick}
              />
            </Box>
            <Cluster mt={".5ch"} spacing={".5ch"}>
              {props.tags.map((r, i) => (
                <ProjectTag key={`${i}-${props.children}`}>{r}</ProjectTag>
              ))}
              <Links showX git={props.git} demo={props.demo} />
            </Cluster>
          </Stack>
          <styled.p>{props.children}</styled.p>
        </Stack>
      </Box>
    </Box>
  );
};
