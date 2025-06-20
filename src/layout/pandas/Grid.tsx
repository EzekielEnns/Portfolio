import { styled } from "@styled-system/jsx";
import { type GridProperties, grid } from "@styled-system/patterns";
import { type HTMLStyledProps } from "@styled-system/jsx";
import { type PropsWithChildren } from "react";

export function Grid({
  children,
  ...p
}: PropsWithChildren & GridProperties & HTMLStyledProps<"div">) {
  return <styled.div className={grid(p)} children={children} />;
}
