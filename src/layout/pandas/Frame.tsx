import { styled } from "@styled-system/jsx";
import { type FrameProperties, frame } from "@styled-system/patterns";
import { type JsxStyleProps } from "@styled-system/types";
import { type PropsWithChildren } from "react";

export function Frame({
  children,
  ...p
}: PropsWithChildren & FrameProperties & JsxStyleProps) {
  return <styled.div className={frame(p)} children={children} />;
}
