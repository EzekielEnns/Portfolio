import { Cluster } from "@styled-system/jsx";
import { HTMLStyledProps } from "@styled-system/types";
import { Btn } from "components/Btn";
import { FaGithubAlt } from "react-icons/fa6";
import { MdEmojiObjects } from "react-icons/md";

export const Links = (props: HTMLStyledProps<"div">) => {
  return (
    <Cluster {...props}>
      <Btn borderRadius={"full"} p={"0.2ch"}>
        <FaGithubAlt />
      </Btn>
      <Btn borderRadius={"full"} p={"0.2ch"}>
        <MdEmojiObjects />
      </Btn>
    </Cluster>
  );
};
