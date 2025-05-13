//TODO Tags

import { styled } from "@styled-system/jsx";
import { PropsWithChildren } from "react";

export function ProjectTag(props: PropsWithChildren) {
  return (
    <styled.div border={"1px solid black"} p={".5ch"}>
      {props.children}
    </styled.div>
  );
}
