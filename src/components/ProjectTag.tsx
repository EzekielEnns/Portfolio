import { styled } from "@styled-system/jsx";
import { PropsWithChildren } from "react";

export function ProjectTag(
  props: PropsWithChildren & { onClick?: () => void; invert?: boolean },
) {
  return (
    <styled.div
      cursor={"pointer"}
      border={"1px solid black"}
      p={".5ch"}
      onClick={props.onClick}
      bgColor={props.invert ? "black" : undefined}
      color={props.invert ? "white" : undefined}
    >
      {props.children}
    </styled.div>
  );
}
