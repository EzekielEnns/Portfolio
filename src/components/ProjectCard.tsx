import { Box, Cluster } from "@styled-system/jsx";
import Modal from "components/Modal";
import { ProjectExpandView } from "components/ProjectExpandedView";
import { ProjectMedia } from "components/ProjectMedia";
import { ProjectTag } from "components/ProjectTag";
import { Title } from "components/ProjectTitle";
import { ReactNode, useState } from "react";

export type ProjectCardProps = {
  tags: string[];
  children: ReactNode;
  src: string;
};
export default function ProjectCard(props: ProjectCardProps) {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <Box bgColor={"white"} scrollSnapAlign={"start"}>
        <Title>Some Project</Title>
        <ProjectMedia
          src={props.src}
          onClick={() => {
            setExpand((o) => !o);
          }}
        />
        <Cluster mt={".5ch"} spacing={".5ch"}>
          {props.tags.map((r, i) => (
            <ProjectTag key={`${i}-${props.children}`}>{r}</ProjectTag>
          ))}
        </Cluster>
        <Box border={"none"}>
          <p>{props.children}</p>
        </Box>
      </Box>
      {expand && (
        <>
          <Modal
            onClick={() => {
              setExpand((o) => !o);
            }}
          >
            <ProjectExpandView {...props} />
          </Modal>
        </>
      )}
    </>
  );
}
