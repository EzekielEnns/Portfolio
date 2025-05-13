import { Grid } from "@styled-system/jsx";
import ProjectCard from "components/ProjectCard";
import { Cover, CoverBody } from "layout/pandas/Cover";

export default function Projects() {
  return (
    <Cover>
      <CoverBody>
        <Grid>
          <ProjectCard
            src="https://preview.redd.it/what-if-we-had-tea-instead-official-riot-games-artwork-at-v0-kcs7n5k6u00f1.jpg?width=1080&crop=smart&auto=webp&s=515096df3f73eaa0ab19c2b1ad8b7719299c28b7"
            tags={["Cksoftware"]}
          >
            Pick the approach that fits your use‑case: Pattern‑centric: bundle
            the logic into a one‑off pattern (great for layout abstractions)
            Condition‑centric: define once, then sprinkle _supportsWidth
            wherever you need it Both rely on Panda’s ability to emit nested
            at‑rules from JS objects, so you get full type‑safety and
            code‑completion while still targeting modern CSS feat
          </ProjectCard>
          <ProjectCard
            src="https://i.redd.it/d6x1xay6ckze1.jpeg"
            tags={["React", "Typescript"]}
          >
            did a thing
          </ProjectCard>
        </Grid>
      </CoverBody>
    </Cover>
  );
}
