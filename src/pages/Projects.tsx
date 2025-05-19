import { styled } from "@styled-system/jsx";
import ProjectCard from "components/ProjectCard";
import { ProjectTag } from "components/ProjectTag";
import { Box } from "layout/pandas/Box";
import { Cluster } from "layout/pandas/cluster";
import { Cover, CoverBody, CoverHeader } from "layout/pandas/Cover";
import { Grid } from "layout/pandas/Grid";
import { useState } from "react";
import { FiFileText } from "react-icons/fi";
import { GoPerson } from "react-icons/go";

const filters = [
  "CkSoftware",
  "SaySo Communications",
  "Golang",
  "RealTime",
  "React",
  "JavaScript",
  "Typescript",
  "DevOps",
  "Developer Tools",
];
export default function Projects() {
  const [af, setAF] = useState<Set<string>>(new Set());
  return (
    <Cover m={"8%"}>
      <CoverHeader>
        {/*TODO turn into buttons with a modal modal*/}
        <Box display={"flex"}>
          <styled.h1 fontSize={"xx-large"}>Explore My Work</styled.h1>
          <styled.div ml={"auto"} display={"flex"}>
            <Box
              display={"flex"}
              flexDir={"column"}
              border={"none"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <GoPerson fontSize={"2em"} />
              <styled.span fontSize={"sm"} textAlign={"center"}>
                About
              </styled.span>
            </Box>
            <Box
              display={"flex"}
              flexDir={"column"}
              border={"none"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <FiFileText fontSize={"2em"} />
              <styled.span w={"100%"} fontSize={"sm"} textAlign={"center"}>
                CV
              </styled.span>
            </Box>
          </styled.div>
        </Box>
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
          {/*TODO load these in content style, via an import /export thing in the content section*/}
          <ProjectCard
            af={af}
            title="DeveloperPalooosa"
            src="https://preview.redd.it/what-if-we-had-tea-instead-official-riot-games-artwork-at-v0-kcs7n5k6u00f1.jpg?width=1080&crop=smart&auto=webp&s=515096df3f73eaa0ab19c2b1ad8b7719299c28b7"
            tags={["Developer Tools", "DevOps"]}
          >
            Pick the approach that fits your use‑case: Pattern‑centric: bundle
            the logic into a one‑off pattern (great for layout abstractions)
          </ProjectCard>
          <ProjectCard
            af={af}
            title="Test Test"
            src="https://preview.redd.it/what-if-we-had-tea-instead-official-riot-games-artwork-at-v0-kcs7n5k6u00f1.jpg?width=1080&crop=smart&auto=webp&s=515096df3f73eaa0ab19c2b1ad8b7719299c28b7"
            tags={["React", "Developer Tools"]}
          >
            Pick the approach that fits your use‑case: Pattern‑centric: bundle
            the logic into a one‑off pattern (great for layout abstractions)
          </ProjectCard>
          <ProjectCard
            af={af}
            title="WWEEEEEE"
            src="https://preview.redd.it/what-if-we-had-tea-instead-official-riot-games-artwork-at-v0-kcs7n5k6u00f1.jpg?width=1080&crop=smart&auto=webp&s=515096df3f73eaa0ab19c2b1ad8b7719299c28b7"
            tags={["JavaScript", "Developer Tools"]}
          >
            Pick the approach that fits your use‑case: Pattern‑centric: bundle
            the logic into a one‑off pattern (great for layout abstractions)
          </ProjectCard>
          <ProjectCard
            af={af}
            title="Some Cool Rpc stuff"
            src="https://preview.redd.it/what-if-we-had-tea-instead-official-riot-games-artwork-at-v0-kcs7n5k6u00f1.jpg?width=1080&crop=smart&auto=webp&s=515096df3f73eaa0ab19c2b1ad8b7719299c28b7"
            tags={["RealTime", "JavaScript", "Golang"]}
          >
            Pick the approach that fits your use‑case: Pattern‑centric: bundle
            the logic into a one‑off pattern (great for layout abstractions)
          </ProjectCard>
          <ProjectCard
            af={af}
            title="Map Extravagansa"
            src="https://preview.redd.it/what-if-we-had-tea-instead-official-riot-games-artwork-at-v0-kcs7n5k6u00f1.jpg?width=1080&crop=smart&auto=webp&s=515096df3f73eaa0ab19c2b1ad8b7719299c28b7"
            tags={["CkSoftware"]}
          >
            Pick the approach that fits your use‑case: Pattern‑centric: bundle
            the logic into a one‑off pattern (great for layout abstractions)
          </ProjectCard>
        </Grid>
      </CoverBody>
    </Cover>
  );
}
