import { styled } from "@styled-system/jsx";
import { type ClusterProperties, cluster } from "@styled-system/patterns";
import { type JsxStyleProps } from "@styled-system/types";
import { type PropsWithChildren } from "react";

export function Cluster({
  children,
  ...p
}: PropsWithChildren & ClusterProperties & JsxStyleProps) {
  return <styled.div className={cluster(p)} children={children} />;
}
