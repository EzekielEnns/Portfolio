import { Grid } from "@styled-system/jsx";
import ProjectCard from "components/ProjectCard";
import { Cover, CoverBody } from "layout/pandas/Cover";

export default function Projects() {
  return (
    <Cover>
      <CoverBody>
        <Grid>
          <ProjectCard>
            Pick the approach that fits your use‑case: Pattern‑centric: bundle
            the logic into a one‑off pattern (great for layout abstractions)
            Condition‑centric: define once, then sprinkle _supportsWidth
            wherever you need it Both rely on Panda’s ability to emit nested
            at‑rules from JS objects, so you get full type‑safety and
            code‑completion while still targeting modern CSS feat
          </ProjectCard>
          <ProjectCard />
        </Grid>
      </CoverBody>
    </Cover>
  );
}
