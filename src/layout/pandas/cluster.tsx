import { styled } from "@styled-system/jsx";
import { type ClusterProperties, cluster } from "@styled-system/patterns";
import { type HTMLStyledProps } from "@styled-system/jsx";
import { type PropsWithChildren } from "react";

export function Cluster({
  children,
  ...p
}: PropsWithChildren & ClusterProperties & HTMLStyledProps<"div">) {
  return <styled.div className={cluster(p)} children={children} />;
}
