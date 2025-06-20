import { Box, Cluster, styled } from "@styled-system/jsx";
import Modal from "components/Modal";
import { ProjectExpandView } from "components/ProjectExpandedView";
import { ProjectMedia } from "components/ProjectMedia";
import { ProjectTag } from "components/ProjectTag";
import { Title } from "components/ProjectTitle";
import { type ReactNode, useMemo, useState } from "react";
import { type LinksProps } from "./ProjectLinks";
import type { Tags } from "content/tags";

export type ProjectCardProps = {
  tags: Tags[];
  af: Set<string>;
  children: ReactNode;
  src: string;
  title: string;
} & LinksProps;
export default function ProjectCard(props: ProjectCardProps) {
  const [expand, setExpand] = useState(false);
  const render = useMemo(
    () => props.af.size == 0 || props.tags.some((r) => props.af.has(r)),
    [props.af, props.tags],
  );
  if (!render) {
    return null;
  }
  return (
    <>
      <Box bgColor={"white"} scrollSnapAlign={"start"}>
        <Title git={props.git} demo={props.demo}>
          {props.title}
        </Title>
        <ProjectMedia
          src={props.src}
          onClick={() => {
            setExpand((o) => !o);
          }}
        />
        <Cluster mt={".5ch"} spacing={".5ch"}>
          {props.tags.map((r, i) => {
            const active = props.af.has(r);
            return (
              <ProjectTag invert={active} key={`${i}-${props.children}`}>
                {r}
              </ProjectTag>
            );
          })}
        </Cluster>
        <Box border={"none"}>
          <styled.p truncate>{props.children}</styled.p>
        </Box>
      </Box>
      <Modal
        expand={expand}
        onClick={() => {
          console.log("she gioung ");
          setExpand((o) => !o);
        }}
      >
        <ProjectExpandView {...props} />
      </Modal>
    </>
  );
}
