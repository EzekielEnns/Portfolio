import { styled } from "@styled-system/jsx";
import { Links, type LinksProps } from "components/ProjectLinks";
import { type PropsWithChildren } from "react";

export const Title = (
  props: LinksProps & PropsWithChildren & { hideLinks?: boolean },
) => {
  return (
    <styled.h1
      display={"flex"}
      pb={"0.5ch"}
      fontSize={"xl"}
      mb={"1rem"}
      borderBottom={"1px solid black"}
      pos={"relative"}
      w={"100%"}
    >
      <styled.span p={"4px"} textWrap={"wrap"}>
        {props.children}
      </styled.span>
      {!props.hideLinks && <Links git={props.git} demo={props.demo} />}
    </styled.h1>
  );
};
