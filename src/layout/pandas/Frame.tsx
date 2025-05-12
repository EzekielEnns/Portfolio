import { styled } from "@styled-system/jsx";
import { FrameProperties, frame } from "@styled-system/patterns";
import { JsxStyleProps } from "@styled-system/types";
import { PropsWithChildren } from "react";

export function Frame({
  children,
  ...p
}: PropsWithChildren & FrameProperties & JsxStyleProps) {
  return <styled.div className={frame(p)} children={children} />;
}
