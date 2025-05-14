import { PropsWithChildren, ReactNode } from "react";

export interface ConditionalWrapperProps extends PropsWithChildren {
  wrapper?: (props: PropsWithChildren) => ReactNode;
}

export default function ConditionalWrapper({
  wrapper,
  children,
}: ConditionalWrapperProps) {
  return wrapper ? wrapper({ children }) : children;
}
