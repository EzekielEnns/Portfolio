import CkEzWebWorkers from "content/CkEzWebWorkers";
import CkMapGrouping from "content/CkMapGrouping";
import CkWorklfow from "content/CkWorklfow";
import LearnWebRtc from "content/LearnWebRtc";
import SwaggerTerraform from "content/SwaggerTerraform";
import UsefulGlyphlib from "content/UsefulGlyphlib";
import WarmupJs from "content/WarmupJs";
import WasmNoBindgen from "content/WasmNoBindgen";

export const Cards = (props: { af: Set<string> }) => {
  return (
    <>
      <CkWorklfow af={props.af} />
      <CkMapGrouping af={props.af} />
      <CkEzWebWorkers af={props.af} />
      <LearnWebRtc af={props.af} />
      <SwaggerTerraform af={props.af} />
      <UsefulGlyphlib af={props.af} />
      <WarmupJs af={props.af} />
      <WasmNoBindgen af={props.af} />
    </>
  );
};
