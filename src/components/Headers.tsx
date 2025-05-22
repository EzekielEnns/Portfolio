import { styled } from "@styled-system/jsx";
import Modal from "components/Modal";
import { About } from "content";
import { Box } from "layout/pandas/Box";
import { useState } from "react";
import { FiFileText } from "react-icons/fi";
import { GoPerson } from "react-icons/go";

export default function Headers() {
  const [about, setAbout] = useState(false);
  const [cv, setCv] = useState(false);

  return (
    <Box display={"flex"}>
      <styled.h1 fontSize={"xx-large"}>Explore My Work</styled.h1>
      <styled.div ml={"auto"} display={"flex"}>
        <Box
          display={"flex"}
          flexDir={"column"}
          border={"none"}
          justifyContent={"center"}
          alignItems={"center"}
          cursor={"pointer"}
          onClick={() => {
            setAbout((o) => !o);
          }}
          _hover={{
            textDecoration: "underline",
          }}
        >
          <GoPerson fontSize={"2em"} />
          <styled.span fontSize={"sm"} textAlign={"center"}>
            About
          </styled.span>
        </Box>
        <Box
          display={"flex"}
          flexDir={"column"}
          border={"none"}
          justifyContent={"center"}
          alignItems={"center"}
          cursor={"pointer"}
          onClick={() => {
            setCv((o) => !o);
          }}
          _hover={{
            textDecoration: "underline",
          }}
        >
          <FiFileText fontSize={"2em"} />
          <styled.span w={"100%"} fontSize={"sm"} textAlign={"center"}>
            CV
          </styled.span>
        </Box>
      </styled.div>
      <Modal expand={about} onClick={() => setAbout((o) => !o)}>
        <About />
      </Modal>
      <Modal expand={cv} onClick={() => setCv((o) => !o)}>
        <Box>TODO Cv</Box>
      </Modal>
    </Box>
  );
}
