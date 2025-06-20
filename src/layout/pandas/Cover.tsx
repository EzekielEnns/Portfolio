import { styled } from "@styled-system/jsx";
import { cover } from "@styled-system/recipes";
import { type HTMLStyledProps } from "@styled-system/jsx";
import { type PropsWithChildren } from "react";

export const Cover = ({
  children,
  ...p
}: PropsWithChildren & HTMLStyledProps<"div">) => {
  const classes = cover();
  return <styled.div {...p} className={classes.root} children={children} />;
};
export const CoverBody = ({ children }: PropsWithChildren) => {
  const classes = cover();
  return <styled.div className={classes.body} children={children} />;
};
export const CoverFooter = ({ children }: PropsWithChildren) => {
  const classes = cover();
  return <styled.div className={classes.footer} children={children} />;
};
export const CoverHeader = ({ children }: PropsWithChildren) => {
  const classes = cover();
  return <styled.div className={classes.header} children={children} />;
};
