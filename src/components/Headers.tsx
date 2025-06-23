import { Stack, styled } from "@styled-system/jsx";
import Modal from "components/Modal";
import { About } from "content";
import { Box } from "layout/pandas/Box";
import { useState, type ReactNode } from "react";
import { FiFileText, FiMail, FiPhone } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Headers() {
  const [about, setAbout] = useState(false);

  return (
    <Box display={"flex"} flexDir={"column"} gap={3}>
      <Box display={"flex"} alignItems={"center"}>
        <styled.h1 fontSize={"xx-large"}>Explore My Work</styled.h1>
        <Stack ml={"auto"} direction="row" gap={2}>
          <LinkButton
            name="About"
            icon={<GoPerson fontSize={"2em"} />}
            onClick={() => setAbout((o) => !o)}
          />
          <Link
            name="CV"
            url="/resume.pdf"
            icon={<FiFileText fontSize={"2em"} />}
          />
        </Stack>
      </Box>
      <Box border={"none"} display={"flex"} gap={1} flexWrap={"wrap"}>
        <CompactLink
          name="LinkedIn"
          url="https://www.linkedin.com/in/ezekiel-enns/"
          icon={<FaLinkedin fontSize={"1.2em"} />}
        />
        <CompactLink
          name="GitHub"
          url="https://github.com/EzekielEnns"
          icon={<FaGithub fontSize={"1.2em"} />}
        />
        <CompactLink
          name="Email"
          url="mailto:ezekiel.enns@pm.me"
          icon={<FiMail fontSize={"1.2em"} />}
        />
        <CompactLink
          name="Phone"
          url="tel:+14035986653"
          icon={<FiPhone fontSize={"1.2em"} />}
        />
      </Box>
      <Modal expand={about} onClick={() => setAbout((o) => !o)}>
        <About />
      </Modal>
    </Box>
  );
}
type LinkProps = { name: string; icon: ReactNode; url: string };
const Link = (props: LinkProps) => (
  <Box
    display={"flex"}
    flexDir={"column"}
    border={"none"}
    justifyContent={"center"}
    alignItems={"center"}
    cursor={"pointer"}
    onClick={() => {
      window.open(props.url, "_blank");
    }}
    _hover={{
      textDecoration: "underline",
    }}
  >
    {props.icon}
    <styled.span fontSize={"sm"} textAlign={"center"}>
      {props.name}
    </styled.span>
  </Box>
);

type LinkButtonProps = { name: string; icon: ReactNode; onClick: () => void };
const LinkButton = (props: LinkButtonProps) => (
  <Box
    display={"flex"}
    flexDir={"column"}
    border={"none"}
    justifyContent={"center"}
    alignItems={"center"}
    cursor={"pointer"}
    onClick={props.onClick}
    _hover={{
      textDecoration: "underline",
    }}
  >
    {props.icon}
    <styled.span fontSize={"sm"} textAlign={"center"}>
      {props.name}
    </styled.span>
  </Box>
);

type CompactLinkProps = { name: string; icon: ReactNode; url: string };
const CompactLink = (props: CompactLinkProps) => (
  <Box
    display={"flex"}
    flexDir={"row"}
    alignItems={"center"}
    gap={2}
    flex={1}
    justifyContent={"center"}
    cursor={"pointer"}
    py={2}
    px={3}
    borderRadius={"md"}
    onClick={() => {
      window.open(props.url, "_blank");
    }}
    _hover={{
      bg: "gray.100",
    }}
  >
    {props.icon}
    <styled.span fontSize={"xs"} textAlign={"center"}>
      {props.name}
    </styled.span>
  </Box>
);
