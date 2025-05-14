import { Box, Cluster } from "@styled-system/jsx";
import { ProjectMedia } from "components/ProjectMedia";
import { ProjectTag } from "components/ProjectTag";
import { Imposter } from "layout/pandas/Imposter";
import { ReactNode, useState } from "react";

type Props = {
  tags: string[];
  children: ReactNode;
  src: string;
};
export default function ProjectCard(props: Props) {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <Box>
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
          <ProjectTag>CkSoftware</ProjectTag>
          <ProjectTag>React</ProjectTag>
          <ProjectTag>TypeScript</ProjectTag>
        </Cluster>
        <Box border={"none"}>
          <p>{props.children}</p>
        </Box>
      </Box>
      {expand && (
        <>
          <Imposter
            //TODO make a backdrop component or turn this into a component
            //TODO maybe portal it upwards
            //TODO make click off close the popup
            //TODO make the layout for this a hell of a lot better just rework the whole thing
            width={"100vw"}
            height={"100vh"}
            zIndex={1} //TODO remove
            borderColor={`rgba(255, 255, 255, 0.2)`}
            backdropFilter={"blur(10px)"}
          />
          <Imposter width={"60vw"} height={"90vh"} zIndex={"1000"}>
            {/*this has to be portaled to the bottom of the dom*/}
            <Box
              bgColor={"white"}
              w={"100%"}
              h={"100%"}
              position={"relative"} //TODO place an x button to close
            >
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
                <ProjectTag>CkSoftware</ProjectTag>
                <ProjectTag>React</ProjectTag>
                <ProjectTag>TypeScript</ProjectTag>
              </Cluster>
              <Box border={"none"}>
                <p>{props.children}</p>
              </Box>
            </Box>
          </Imposter>
        </>
      )}
    </>
  );
}
