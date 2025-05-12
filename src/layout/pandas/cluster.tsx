import { styled } from "@styled-system/jsx";
import { ClusterProperties, cluster } from "@styled-system/patterns";
import { JsxStyleProps } from "@styled-system/types";
import { PropsWithChildren } from "react";

export function Cluster({
  children,
  ...p
}: PropsWithChildren & ClusterProperties & JsxStyleProps) {
  return <styled.div className={cluster(p)} children={children} />;
}
