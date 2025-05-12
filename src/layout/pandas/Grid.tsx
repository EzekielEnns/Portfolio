import { styled } from "@styled-system/jsx";
import { GridProperties, grid } from "@styled-system/patterns";
import { JsxStyleProps } from "@styled-system/types";
import { PropsWithChildren } from "react";

export function Grid({
  children,
  ...p
}: PropsWithChildren & GridProperties & JsxStyleProps) {
  return <styled.div className={grid(p)} children={children} />;
}
