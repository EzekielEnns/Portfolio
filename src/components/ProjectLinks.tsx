import { type HTMLStyledProps } from "@styled-system/types";
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
    <Box
      p={"0px"}
      ml={"auto"}
      border={"none"}
      spaceY={"0.5em"}
      spaceX={props.showX ? "0.5em" : undefined}
    >
      {props.git && (
        <Btn
          borderRadius={"full"}
          p={"0.2ch"}
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
          p={"0.2ch"}
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
