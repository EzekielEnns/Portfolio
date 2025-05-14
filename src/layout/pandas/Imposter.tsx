import { styled } from "@styled-system/jsx";
import { imposter } from "@styled-system/recipes";
import { JsxStyleProps } from "@styled-system/types";
import { PropsWithChildren } from "react";

export function Imposter({
  children,
  ...p
}: PropsWithChildren & JsxStyleProps) {
  return <styled.div {...p} className={imposter()} children={children} />;
}
