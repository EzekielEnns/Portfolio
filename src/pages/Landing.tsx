import { styled, Stack } from "@styled-system/jsx";
import { Cover, CoverBody, CoverFooter } from "layout/pandas/Cover";
export default function Landing(props: { onClick?: () => void }) {
  return (
    <Cover>
      <CoverBody>
        <styled.header justifyContent={"space-between"} display={"flex"}>
          <Stack justify={"center"}>
            <styled.span fontSize={["7xl", "9xl"]} lineHeight={"1em"}>
              Ezekiel Enns
            </styled.span>
            <styled.span
              float={"left"}
              position={"relative"}
              left={"0.1em"}
              fontSize={["3xl", "5xl"]}
            >
              FullStack Dev
            </styled.span>
          </Stack>
          <styled.h1 writingMode={"vertical-rl"} fontSize={["2xl", "4xl"]}>
            React / Golang / C# / TypeScript / JavaScript
          </styled.h1>
        </styled.header>
      </CoverBody>
      <CoverFooter>
        <styled.button
          cursor={"pointer"}
          _hover={{ bgColor: "rgba(128,128,128,0.7)" }}
          w={"100%"}
          borderRadius={"xl"}
          transition={"background"}
          fontSize={"xl"}
          p={"4px"}
          onClick={props.onClick}
        >
          {/*TODO change to something with a bit more pazzas*/}
          scroll to see more
        </styled.button>
      </CoverFooter>
    </Cover>
  );
}
