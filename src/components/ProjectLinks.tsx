import { type HTMLStyledProps } from "@styled-system/jsx";
import { Btn } from "components/Btn";
import { Box } from "layout/pandas/Box";
import { FaGithubAlt } from "react-icons/fa6";
import { MdEmojiObjects } from "react-icons/md";

export type LinksProps = {
  git?: string;
  demo?: string;
  showX?: boolean;
};
export const Links = (props: LinksProps & HTMLStyledProps<"div">) => {
  return (
    <Box display={"flex"} p={"0px"} ml={"auto"} border={"none"} gap={"0.5em"}>
      {props.git && (
        <Btn
          borderRadius={"full"}
          w={{ base: "2.75rem", md: "2rem" }}
          h={{ base: "2.75rem", md: "2rem" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          onClick={() => {
            window.open(props.git, "_blank");
          }}
        >
          <FaGithubAlt />
        </Btn>
      )}
      {props.demo && (
        <Btn
          borderRadius={"full"}
          w={{ base: "2.75rem", md: "2rem" }}
          h={{ base: "2.75rem", md: "2rem" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          onClick={() => {
            window.open(props.demo, "_blank");
          }}
        >
          <MdEmojiObjects />
        </Btn>
      )}
    </Box>
  );
};
