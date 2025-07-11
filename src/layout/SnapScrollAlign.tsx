import { styled } from "@styled-system/jsx";
import { type PropsWithChildren } from "react";

export function SnapScrollAlign({ children }: PropsWithChildren) {
  return (
    <styled.div scrollSnapAlign={"start"} children={children} mt={"2rem"} />
  );
}
