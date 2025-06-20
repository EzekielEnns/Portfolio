import { type PropsWithChildren } from "react";
import { styled } from "../../../styled-system/jsx";
import { type JsxStyleProps } from "../../../styled-system/types";
import { box, type BoxProperties } from "@styled-system/patterns";

export function Box({
  children,
  onClick,
  ...p
}: PropsWithChildren &
  BoxProperties &
  JsxStyleProps & { onClick?: () => void }) {
  return (
    <styled.div className={box(p)} children={children} onClick={onClick} />
  );
}
