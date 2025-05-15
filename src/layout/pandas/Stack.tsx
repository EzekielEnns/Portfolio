import { HTMLStyledProps, styled } from "@styled-system/jsx";
import { StackProperties, stack } from "@styled-system/patterns";
import { PropsWithChildren } from "react";

export function Stack({
  children,
  ...p
}: PropsWithChildren & StackProperties & HTMLStyledProps<"div">) {
  return <styled.div className={stack(p)} children={children} />;
}
