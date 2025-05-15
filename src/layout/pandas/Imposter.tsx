import { styled } from "@styled-system/jsx";
import { imposter, ImposterVariant } from "@styled-system/recipes";
import { JsxStyleProps } from "@styled-system/types";
import { PropsWithChildren } from "react";

export function Imposter({
  children,
  ...p
}: PropsWithChildren & JsxStyleProps & Partial<ImposterVariant>) {
  return <styled.div {...p} className={imposter(p)} children={children} />;
}
