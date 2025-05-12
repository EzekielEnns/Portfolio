import { Box, Frame, styled, Cluster } from "@styled-system/jsx";
import { PropsWithChildren } from "react";

export default function ProjectCard(props: PropsWithChildren) {
  return (
    <Box>
      <Frame
        denominator={4}
        numerator={5}
        objectPosition={"top"}
        pos={"relative"}
      >
        <img src="https://i.redd.it/d6x1xay6ckze1.jpeg" />
        <styled.button
          bgColor={"white"}
          w={"2rem"}
          h={"2rem"}
          position={"absolute"}
          zIndex={3}
          bottom={0}
          right={0}
          m={"1rem"}
          borderRadius={"12px"}
        >
          [+]
        </styled.button>
      </Frame>
      <Cluster>
        <div>Cksoftware</div>
        <div>React</div>
        <div>TypeScript</div>
      </Cluster>
      <Box border={"none"}>
        <p>{props.children ?? "Hello World"}</p>
      </Box>
    </Box>
  );
}
