import { styled } from "@styled-system/jsx";
import { type SwitcherProperties, switcher } from "@styled-system/patterns";
import { type HTMLStyledProps } from "@styled-system/jsx";
import { type PropsWithChildren } from "react";

export function Switcher({
  children,
  ...p
}: PropsWithChildren & SwitcherProperties & HTMLStyledProps<"div">) {
  return <styled.div className={switcher(p)} children={children} />;
}
