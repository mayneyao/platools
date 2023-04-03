import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import ToolKit from "../components/ui/ToolKit";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="robots" content="index" />
      </Head>
      <Hero />
      {/* <LogoGrid /> */}
      <GradientWrapper>
        <Features />
        {/* <CTA /> */}
      </GradientWrapper>
      <GradientWrapper>
        <ToolKit />
      </GradientWrapper>
      <GradientWrapper>{/* <Pricing /> */}</GradientWrapper>
      <FooterCTA />
    </>
  );
}
