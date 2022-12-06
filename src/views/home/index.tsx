import { Button, Box, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";

import BridgeScreenshot from "@/assets/images/homepage/home/bridge-screenshot.png";
import BridgeScreenshotMobile from "@/assets/images/homepage/home/bridge-screenshot-m.png";
import RocketIcon from "@/assets/images/homepage/home/rocket.png";
import WrapperBox from "@/components/WrapperBox";
import { medias } from "@/constants/medias";
import FeatureSwiper from "./featureSwiper";
import Roadmap from "./roadmap";
import Article from "./articles";

import "swiper/css";
import "swiper/css/pagination";

const ContainerBox = styled(Box)({
  textAlign: "center",
});

const SectionBox = styled(Box)(
  ({ theme }) => `
  padding: 12rem 0;
  &:nth-of-type(odd) {
    background: #ffffff;
  };
  &:nth-of-type(even) {
    background: #fffdf1;
  };
  &.roadmap-section {
    display: flex;
  };
  ${theme.breakpoints.down("md")} {
    padding: 8rem 0; 
  };
  `
);

const RoadmapBoxWrapper = styled(Box)(
  ({ theme }) => `
  display: flex;
  justify-content: space-between;
    ${theme.breakpoints.down("md")} {
      align-items: center;
      flex-direction: column;
    };
    `
);

const RoadmapInfo = styled(Box)(
  ({ theme }) => `
        text-align: left;
        max-width: 40rem;
        margin-right: 4rem;
        "& .MuiTypography-root" {
          text-align: left !important;
        }
        ${theme.breakpoints.down("md")} {
          margin-right: 0;
          text-align: center;
        };
      `
);

const TitleTypography = styled(Typography)(
  ({ theme }) => `
    max-width: 56rem;
    text-align: center;
    margin: 2rem auto 0; 
    ${theme.breakpoints.down("md")} {
      margin: 0 auto; 
    };
    `
);

const SubTitleTypography = styled(Typography)(
  ({ theme }) => `
      text-align: center;
      margin: 1.4rem auto 3.6rem; 
      `
);

const MediaCard = styled(Box)(
  ({ theme }) => `
    background: #FFFFFF;
    border-radius: 2rem;
    text-align: left;
    padding: 5rem 5rem 6rem 4rem;
    &:first-of-type {
      margin-right: 3rem;
    }
    ${theme.breakpoints.down("md")} {
      &:first-of-type {
        margin-right: 0;
        margin-bottom: 5rem;
        padding: 4rem 3.3rem;
      }
    };
  `
);

const MediaTitle = styled(Typography)(
  ({ theme }) => `
        color: #313144;
        font-weight: 600;
        font-size: 3rem !important;
        line-height: 4rem !important;
      `
);

const MediaSummary = styled(Typography)(
  ({ theme }) => `
      font-size: 16px;
      line-height: 26px;
      color: #313144;
      margin: 2rem auto;
      `
);

const MediaContainer = styled(Box)(
  ({ theme }) => `
        ${theme.breakpoints.down("md")} {
          flex-direction: column;
      };
      `
);

const BridgeScreenshotImg = styled("img")(
  ({ theme }) => `
       height: auto;
       max-width: 93.4rem;
       width: 100%;
       margin-top: 8.7rem;
      `
);

const RocketImg = styled("img")(
  ({ theme }) => `
       height: 6rem;
       ${theme.breakpoints.down("md")} {
        height: 4rem;
        position: relative;
        top: -3.6rem;
      };
      `
);

const MediaLink = styled("a")(
  ({ theme }) => `
        height: 3.3rem;
        width: 4.4rem;
        margin-right: 3rem;
        &:hover {
          opacity: 0.8;
        }
        ${theme.breakpoints.down("md")} {
          height: 2.4rem;
          width: 3.3rem;
          margin-right: 2.3rem;
      };
      `
);

const JoinTestnetButton = (props) => (
  <Button
    color="primary"
    variant="contained"
    href="https://prealpha.scroll.io/"
    {...props}
  >
    Join Pre-Alpha Testnet
  </Button>
);

const Home = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ContainerBox>
      <SectionBox>
        <WrapperBox>
          <TitleTypography variant="h2">
            The Native zkEVM Scaling Solution for Ethereum
          </TitleTypography>
          <SubTitleTypography variant="subtitle1" sx={{ maxWidth: "60rem" }}>
            Scroll is a zkEVM-based zkRollup on Ethereum which enables native
            compatibility for existing Ethereum applications and tools.
          </SubTitleTypography>
          <JoinTestnetButton />
        </WrapperBox>
      </SectionBox>

      <SectionBox>
        <WrapperBox>
          <TitleTypography variant="h2">Technical Principles</TitleTypography>
          <SubTitleTypography variant="subtitle1" sx={{ maxWidth: "63rem" }}>
            Scroll aims to provide the best experience for developers and users.
          </SubTitleTypography>
        </WrapperBox>
        <FeatureSwiper />
      </SectionBox>

      <SectionBox>
        <WrapperBox>
          <TitleTypography variant="h2">
            Join the Scroll Testnet
          </TitleTypography>
          <SubTitleTypography variant="subtitle1" sx={{ maxWidth: "53rem" }}>
            The future is here: interact with dapps, deploy smart contracts and
            explore L2 blocks on Scroll’s Testnet.
          </SubTitleTypography>
          <Box>
            <JoinTestnetButton />
          </Box>
          <BridgeScreenshotImg
            src={isDesktop ? BridgeScreenshot : BridgeScreenshotMobile}
          />
        </WrapperBox>
      </SectionBox>

      <SectionBox className="roadmap-section">
        <RoadmapBoxWrapper className="wrapper">
          <RoadmapInfo>
            <TitleTypography variant="h2">Our journey so far</TitleTypography>
            <SubTitleTypography
              variant="subtitle1"
              sx={{
                maxWidth: "53rem",
                color: "#737373",
                textAlign: {
                  md: "left",
                },
              }}
            >
              After achieving Phase 1, we’re now working on{" "}
              <span style={{ fontWeight: 600 }}>Phase 2: zkEVM Testnet</span>.{" "}
              <br />
              We’re thrilled for the community to try it out and share helpful
              feedback.
            </SubTitleTypography>
            <JoinTestnetButton />
          </RoadmapInfo>
          <Roadmap />
        </RoadmapBoxWrapper>
      </SectionBox>

      <SectionBox>
        <TitleTypography variant="h2">Learning Hub</TitleTypography>
        <Article />
      </SectionBox>

      <SectionBox sx={{ background: "#E7F6FE !important" }}>
        <MediaContainer className="wrapper" display="flex">
          <MediaCard>
            <MediaTitle>
              Want to scale Ethereum together? Join us today
            </MediaTitle>
            <MediaSummary>
              Scroll is a team of passionate contributors around the globe. We
              value ideas and execution above all else. Join us today!
            </MediaSummary>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button
                color="secondary"
                sx={{ height: "5rem" }}
                href="https://jobs.lever.co/ScrollFoundation"
              >
                View Open Positions
              </Button>
              <RocketImg src={RocketIcon} />
            </Box>
          </MediaCard>
          <MediaCard>
            <MediaTitle>
              Want the latest updates?
              <br /> Check out our social medias
            </MediaTitle>
            <MediaSummary>
              Be part of our community and stay up to date with all things
              Scroll. Everyone who wants to build a decentralized future is
              welcome!
            </MediaSummary>
            <Box display="flex" paddingTop="1rem">
              {medias.map((media) => (
                <MediaLink
                  href={media.href}
                  key={media.name}
                  sx={{
                    background: `url(${media.imgSrc}) center / contain no-repeat `,
                  }}
                  className={media.name}
                />
              ))}
            </Box>
          </MediaCard>
        </MediaContainer>
      </SectionBox>
    </ContainerBox>
  );
};

export default Home;