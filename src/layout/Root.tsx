import { PropsWithChildren } from "react";
import { styled } from "../../styled-system/jsx";

export function Root({ children }: PropsWithChildren) {
  return (
    <styled.div
      h={"100vh"}
      overflowY={"auto"}
      scrollSnapType={"y mandatory"}
      children={children}
    />
  );
}
