import Head from "next/head";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";
import { SiteConfig } from "./const";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{SiteConfig.title}</title>
        <meta name="description" content={SiteConfig.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
