import { styled } from "@styled-system/jsx";
import { PropsWithChildren } from "react";

export function SnapScrollAlign({ children }: PropsWithChildren) {
  return <styled.div scrollSnapAlign={"start"} children={children} />;
}
