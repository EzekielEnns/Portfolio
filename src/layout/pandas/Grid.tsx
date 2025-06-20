import { styled } from "@styled-system/jsx";
import { type GridProperties, grid } from "@styled-system/patterns";
import { type JsxStyleProps } from "@styled-system/types";
import { type PropsWithChildren } from "react";

export function Grid({
  children,
  ...p
}: PropsWithChildren & GridProperties & JsxStyleProps) {
  return <styled.div className={grid(p)} children={children} />;
}
