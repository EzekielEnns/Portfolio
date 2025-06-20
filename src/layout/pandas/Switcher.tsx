import { styled } from "@styled-system/jsx";
import { type SwitcherProperties, switcher } from "@styled-system/patterns";
import { type JsxStyleProps } from "@styled-system/types";
import { type PropsWithChildren } from "react";

export function Switcher({
  children,
  ...p
}: PropsWithChildren & SwitcherProperties & JsxStyleProps) {
  return <styled.div className={switcher(p)} children={children} />;
}
