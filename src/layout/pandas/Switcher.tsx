import { styled } from "@styled-system/jsx";
import { SwitcherProperties, switcher } from "@styled-system/patterns";
import { JsxStyleProps } from "@styled-system/types";
import { PropsWithChildren } from "react";

export function Switcher({
  children,
  ...p
}: PropsWithChildren & SwitcherProperties & JsxStyleProps) {
  return <styled.div className={switcher(p)} children={children} />;
}
