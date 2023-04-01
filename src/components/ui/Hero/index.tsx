import { SiteConfig } from "../../const";
import NavLink from "../NavLink";

const Hero = () => (
  <section>
    <div className="custom-screen py-28 text-gray-600">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
          {SiteConfig.description}
        </h1>
        <p className="max-w-xl mx-auto">
          Design with custom data from Notion databases or AI-generated content
        </p>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
          <NavLink
            href="https://www.figma.com/community/plugin/1220625048523881652"
            className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
          >
            Start Now
          </NavLink>
          <NavLink
            href="https://gine.notion.site/Plato-43fea0ab8c5e4b7682c5cbc88a179193"
            className="text-gray-700 border hover:bg-gray-50"
            scroll={false}
          >
            Learn more
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
