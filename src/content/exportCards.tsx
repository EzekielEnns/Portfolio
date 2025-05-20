import CkMapGrouping from "content/CkMapGrouping";
import CkWorklfow from "content/CkWorklfow";

export const Cards = (props: { af: Set<string> }) => {
  return (
    <>
      <CkWorklfow af={props.af} />
      <CkMapGrouping af={props.af} />
    </>
  );
};
