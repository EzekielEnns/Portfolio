import { Frame, styled } from "@styled-system/jsx";
import { Btn } from "components/Btn";
import { IoMdExpand } from "react-icons/io";
type Props = {
  src: string;
  onClick?: () => void;
  mW?: string;
  mH?: string;
  w?: string;
  h?: string;
};
export function ProjectMedia(props: Props) {
  return (
    <Frame
      h={props.h}
      w={props.w}
      maxW={props.mW}
      maxH={props.mH}
      denominator={9}
      numerator={16}
      objectPosition={"top"}
      pos={"relative"}
    >
      <styled.img style={{ borderRadius: "12px" }} src={props.src} />
      {props.onClick && (
        <Btn
          onClick={props.onClick}
          w={"1.4rem"}
          h={"1.4rem"}
          p={"0.2ch"}
          position={"absolute"}
          bottom={0}
          right={0}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          m={"1rem"}
        >
          <IoMdExpand />
        </Btn>
      )}
    </Frame>
  );
}
