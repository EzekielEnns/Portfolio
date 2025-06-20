import { styled } from "@styled-system/jsx";
import { Btn } from "components/Btn";
import { Imposter } from "layout/pandas/Imposter";
import { type PropsWithChildren } from "react";
import { FaX } from "react-icons/fa6";

export default function Modal(
  props: PropsWithChildren & { onClick: () => void; expand: boolean },
) {
  if (!props.expand) {
    return null;
  }
  return (
    <>
      <Imposter
        width={"100vw"}
        height={"100vh"}
        zIndex={1}
        borderColor={`rgba(255, 255, 255, 0.2)`}
        backdropFilter={"blur(10px)"}
        pointerEvents={"none"}
      />
      <Imposter zIndex={"1000"} test>
        <styled.div pos={"relative"} w={"75vw"} maxW={"90vw"} h={"90vh"}>
          <Btn
            borderRadius={"16px"}
            pos={"absolute"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            top={0}
            right={0}
            m={"0.5rem"}
            w={"1.4rem"}
            h={"1.4rem"}
            onClick={props.onClick}
          >
            <FaX />
          </Btn>
          {props.children}
        </styled.div>
      </Imposter>
    </>
  );
}
