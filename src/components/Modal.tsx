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
      <Imposter zIndex={"1000"}>
        <styled.div
          pos={"relative"}
          w={{ base: "95vw", md: "75vw" }}
          maxW={"95vw"}
          h={{ base: "95dvh", md: "90vh" }}
          css={{
            "@supports (height: 100dvh)": {
              height: "95dvh",
            },
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
        >
          <Btn
            borderRadius={"16px"}
            pos={"absolute"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            top={"0.75rem"}
            right={"0.75rem"}
            w={{ base: "2.75rem", md: "2rem" }}
            h={{ base: "2.75rem", md: "2rem" }}
            zIndex={10}
            _hover={{
              transform: "none",
              filter: "brightness(1.1)",
            }}
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
