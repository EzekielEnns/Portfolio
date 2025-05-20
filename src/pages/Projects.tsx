import Headers from "components/Headers";
import { ProjectTag } from "components/ProjectTag";
import { Cards, Tags } from "content";
import { Cluster } from "layout/pandas/cluster";
import { Cover, CoverBody, CoverHeader } from "layout/pandas/Cover";
import { Grid } from "layout/pandas/Grid";
import { useState } from "react";

const filters = Object.keys(Tags);
export default function Projects() {
  //TODO move to store
  const [af, setAF] = useState<Set<string>>(new Set());
  return (
    <Cover m={"8%"}>
      <CoverHeader>
        <Headers />
        <Cluster gap={"0.5em"} m={"1rem"}>
          {filters.map((r) => (
            <ProjectTag
              invert={af.has(r)}
              key={`${r}-tags`}
              onClick={() => {
                setAF((o) => {
                  const nxt = new Set(o);
                  if (nxt.has(r)) {
                    nxt.delete(r);
                  } else {
                    nxt.add(r);
                  }
                  return nxt;
                });
              }}
            >
              {r}
            </ProjectTag>
          ))}
        </Cluster>
      </CoverHeader>
      <CoverBody>
        <Grid minimum={300} max={0.5}>
          <Cards af={af} />
        </Grid>
      </CoverBody>
    </Cover>
  );
}
