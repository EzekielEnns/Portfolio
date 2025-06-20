import { styled } from "@styled-system/jsx";
import Modal from "components/Modal";
import { About } from "content";
import { Box } from "layout/pandas/Box";
import { useState } from "react";
import { FiFileText } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Headers() {
  const [about, setAbout] = useState(false);

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
            window.open("/resume.pdf", "_blank");
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
        <Box
          display={"flex"}
          flexDir={"column"}
          border={"none"}
          justifyContent={"center"}
          alignItems={"center"}
          cursor={"pointer"}
          onClick={() => {
            window.open("https://www.linkedin.com/in/ezekiel-enns/", "_blank");
          }}
          _hover={{
            textDecoration: "underline",
          }}
        >
          <FaLinkedin fontSize={"2em"} />
          <styled.span fontSize={"sm"} textAlign={"center"}>
            LinkedIn
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
            window.open("https://github.com/ezekielenns", "_blank");
          }}
          _hover={{
            textDecoration: "underline",
          }}
        >
          <FaGithub fontSize={"2em"} />
          <styled.span fontSize={"sm"} textAlign={"center"}>
            GitHub
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
            window.open("mailto:ezekiel.enns@pm.me", "_self");
          }}
          _hover={{
            textDecoration: "underline",
          }}
        >
          <MdEmail fontSize={"2em"} />
          <styled.span fontSize={"sm"} textAlign={"center"}>
            Email
          </styled.span>
        </Box>
      </styled.div>
      <Modal expand={about} onClick={() => setAbout((o) => !o)}>
        <About />
      </Modal>
    </Box>
  );
}
