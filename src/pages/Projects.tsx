import { styled } from "@styled-system/jsx";
import ProjectCard from "components/ProjectCard";
import { ProjectTag } from "components/ProjectTag";
import { Box } from "layout/pandas/Box";
import { Cluster } from "layout/pandas/cluster";
import { Cover, CoverBody, CoverHeader } from "layout/pandas/Cover";
import { Grid } from "layout/pandas/Grid";

export default function Projects() {
  return (
    <Cover>
      <CoverHeader>
        <Box>
          <styled.h1 fontSize={"xx-large"}>Explore My Work</styled.h1>
        </Box>
        <Cluster gap={"0.5em"} m={"1rem"}>
          <styled.h1>Filter By Tag</styled.h1>
          <ProjectTag>CkSoftware</ProjectTag>
          <ProjectTag>SaySo</ProjectTag>
          <ProjectTag>React</ProjectTag>
          <ProjectTag>Go</ProjectTag>
          <ProjectTag>CSharp</ProjectTag>
          <ProjectTag>Cloud Infra</ProjectTag>
          <ProjectTag>JavaScript</ProjectTag>
          <ProjectTag>Typescript</ProjectTag>
          <ProjectTag>Real-Time</ProjectTag>
          <ProjectTag>Library Development</ProjectTag>
        </Cluster>
        <Grid>
          {/*TODO filter out projects based on tags, if 3+ tags are chosen show default blurb */}
          <Box>
            <styled.h1>JavaScript</styled.h1>
            <hr />
            <styled.p pb={"1rem"}>
              I have 10 years Experience in industry, with a mountain of
              projects, discover the projects I've done with each business, tool
              or other category I've worked in
            </styled.p>
          </Box>
          <Box>
            <styled.h1>JavaScript</styled.h1>
            <hr />
            <styled.p pb={"1rem"}>
              I have 10 years Experience in industry, with a mountain of
              projects, discover the projects I've done with each business, tool
              or other category I've worked in
            </styled.p>
          </Box>
          <Box>
            <styled.h1>JavaScript</styled.h1>
            <hr />
            <styled.p pb={"1rem"}>
              I have 10 years Experience in industry, with a mountain of
              projects, discover the projects I've done with each business, tool
              or other category I've worked in
            </styled.p>
          </Box>
          <Box>
            <styled.h1>JavaScript</styled.h1>
            <hr />
            <styled.p pb={"1rem"}>
              I have 10 years Experience in industry, with a mountain of
              projects, discover the projects I've done with each business, tool
              or other category I've worked in
            </styled.p>
          </Box>
          <Box>
            <styled.h1>JavaScript</styled.h1>
            <hr />
            <styled.p pb={"1rem"}>
              I have 10 years Experience in industry, with a mountain of
              projects, discover the projects I've done with each business, tool
              or other category I've worked in
            </styled.p>
          </Box>
        </Grid>
      </CoverHeader>
      <CoverBody>
        <Grid minimum={300}>
          <ProjectCard
            src="https://preview.redd.it/what-if-we-had-tea-instead-official-riot-games-artwork-at-v0-kcs7n5k6u00f1.jpg?width=1080&crop=smart&auto=webp&s=515096df3f73eaa0ab19c2b1ad8b7719299c28b7"
            tags={["Cksoftware"]}
          >
            Pick the approach that fits your use‑case: Pattern‑centric: bundle
            the logic into a one‑off pattern (great for layout abstractions)
          </ProjectCard>
          <ProjectCard
            src="https://preview.redd.it/what-if-we-had-tea-instead-official-riot-games-artwork-at-v0-kcs7n5k6u00f1.jpg?width=1080&crop=smart&auto=webp&s=515096df3f73eaa0ab19c2b1ad8b7719299c28b7"
            tags={["Cksoftware"]}
          >
            Pick the approach that fits your use‑case: Pattern‑centric: bundle
            the logic into a one‑off pattern (great for layout abstractions)
          </ProjectCard>
          <ProjectCard
            src="https://preview.redd.it/what-if-we-had-tea-instead-official-riot-games-artwork-at-v0-kcs7n5k6u00f1.jpg?width=1080&crop=smart&auto=webp&s=515096df3f73eaa0ab19c2b1ad8b7719299c28b7"
            tags={["Cksoftware"]}
          >
            Pick the approach that fits your use‑case: Pattern‑centric: bundle
            the logic into a one‑off pattern (great for layout abstractions)
          </ProjectCard>
          <ProjectCard
            src="https://preview.redd.it/what-if-we-had-tea-instead-official-riot-games-artwork-at-v0-kcs7n5k6u00f1.jpg?width=1080&crop=smart&auto=webp&s=515096df3f73eaa0ab19c2b1ad8b7719299c28b7"
            tags={["Cksoftware"]}
          >
            Pick the approach that fits your use‑case: Pattern‑centric: bundle
            the logic into a one‑off pattern (great for layout abstractions)
          </ProjectCard>
          <ProjectCard
            src="https://i.redd.it/d6x1xay6ckze1.jpeg"
            tags={["React", "Typescript"]}
          >
            did a thing
          </ProjectCard>
          <ProjectCard
            src="https://i.redd.it/d6x1xay6ckze1.jpeg"
            tags={["React", "Typescript"]}
          >
            did a thing
          </ProjectCard>
          <ProjectCard
            src="https://i.redd.it/d6x1xay6ckze1.jpeg"
            tags={["React", "Typescript"]}
          >
            did a thing
          </ProjectCard>
          <ProjectCard
            src="https://i.redd.it/d6x1xay6ckze1.jpeg"
            tags={["React", "Typescript"]}
          >
            did a thing
          </ProjectCard>
          <ProjectCard
            src="https://i.redd.it/d6x1xay6ckze1.jpeg"
            tags={["React", "Typescript"]}
          >
            did a thing
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
