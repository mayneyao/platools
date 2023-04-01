import Figma from "public/icons/figma.svg";
import Notion from "public/icons/notion.svg";
import Openai from "public/icons/openai.svg";
import SectionWrapper from "../../SectionWrapper";

const ToolKit = () => {
  const features = [
    {
      icon: <Figma />,
      title: "Figma",
      desc: "Figma is a web-based collaborative interface design tool that allows multiple designers to work on a design project simultaneously.",
    },
    {
      icon: <Notion />,
      title: "Notion",
      desc: "Notion is a web-based all-in-one workspace that combines note-taking, project management, and task organization.",
    },
    {
      icon: <Openai />,
      title: "OpenAI",
      desc: "OpenAI is a research organization that aims to make AI technology safe and beneficial for humanity.",
    },
  ];

  return (
    <SectionWrapper>
      <div
        id="toolkit"
        className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8"
      >
        <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Work with the best toolkit
          </h2>
          <p>These are a few of our favourite things</p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li key={idx} className="flex gap-x-4">
                <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg text-gray-800 font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-3">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ToolKit;
