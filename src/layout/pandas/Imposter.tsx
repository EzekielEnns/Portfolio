import { styled } from "@styled-system/jsx";
import { imposter, type ImposterVariant } from "@styled-system/recipes";
import { type HTMLStyledProps } from "@styled-system/jsx";
import { type PropsWithChildren } from "react";

//TODO add an onClick
export function Imposter({
  children,
  ...p
}: PropsWithChildren & HTMLStyledProps<"div"> & Partial<ImposterVariant>) {
  return <styled.div {...p} className={imposter(p)} children={children} />;
}
