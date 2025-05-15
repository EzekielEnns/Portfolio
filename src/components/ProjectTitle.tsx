import { styled } from "@styled-system/jsx";
import { Links } from "components/ProjectLinks";
import { PropsWithChildren } from "react";

export const Title = (props: PropsWithChildren & { hideLinks?: boolean }) => {
  return (
    <styled.h1
      pb={"0.5ch"}
      fontSize={"xl"}
      mb={"1rem"}
      borderBottom={"1px solid black"}
      pos={"relative"}
    >
      {props.children}
      {!props.hideLinks && (
        <Links position={"absolute"} top={"0"} right={"0"} />
      )}
    </styled.h1>
  );
};
