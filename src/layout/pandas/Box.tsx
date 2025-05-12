import { PropsWithChildren } from "react";
import { styled } from "../../../styled-system/jsx";
import { JsxStyleProps } from "../../../styled-system/types";
import { box, BoxProperties } from "@styled-system/patterns";

export function Box({
  children,
  ...p
}: PropsWithChildren & BoxProperties & JsxStyleProps) {
  return <styled.div className={box(p)} children={children} />;
}
