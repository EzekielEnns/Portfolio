import { Frame, styled } from "@styled-system/jsx";
import { JsxStyleProps } from "@styled-system/types";
import { Cluster } from "layout/pandas/cluster";
import { PropsWithChildren } from "react";
import { FaGithubAlt } from "react-icons/fa";
import { IoMdExpand } from "react-icons/io";
import { MdEmojiObjects } from "react-icons/md";
type Props = {
  src: string;
  onClick?: () => void;
};
export function ProjectMedia(props: Props) {
  return (
    <Frame
      denominator={4}
      numerator={5}
      objectPosition={"top"}
      pos={"relative"}
    >
      <Cluster position={"absolute"} top={"0"} right={"0"} m={"1rem"}>
        <Btn borderRadius={"full"} p={"0.2ch"}>
          <FaGithubAlt />
        </Btn>
        <Btn borderRadius={"full"} p={"0.2ch"}>
          <MdEmojiObjects />
        </Btn>
      </Cluster>
      <img src={props.src} />
      <Btn
        onClick={props.onClick}
        w={"1.4rem"}
        h={"1.4rem"}
        p={"0.2ch"}
        position={"absolute"}
        zIndex={3}
        bottom={0}
        right={0}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        m={"1rem"}
      >
        <IoMdExpand />
      </Btn>
    </Frame>
  );
}

const Btn = (
  props: PropsWithChildren & JsxStyleProps & { onClick?: () => void },
) => {
  return (
    <styled.button
      _hover={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;",
      }}
      boxShadow={
        "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
      }
      bgColor={"whitesmoke"}
      {...props}
    />
  );
};
