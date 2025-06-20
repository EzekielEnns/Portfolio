import { styled } from "@styled-system/jsx";
import { type FrameProperties, frame } from "@styled-system/patterns";
import { type HTMLStyledProps } from "@styled-system/jsx";
import { type PropsWithChildren } from "react";

export function Frame({
  children,
  ...p
}: PropsWithChildren & FrameProperties & HTMLStyledProps<"div">) {
  return <styled.div className={frame(p)} children={children} />;
}
