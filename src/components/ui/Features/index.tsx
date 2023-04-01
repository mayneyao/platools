import SectionWrapper from "../../SectionWrapper";

const Features = () => {
  const features = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <g clipPath="url(#clip0_17_4826)">
            <path
              d="M22 9.24L14.81 8.62L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.55 13.97L22 9.24ZM12 15.4L8.24 17.67L9.24 13.39L5.92 10.51L10.3 10.13L12 6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z"
              fill="#323232"
            />
          </g>
          <defs>
            <clipPath id="clip0_17_4826">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Database Management",
      desc: "Manage your Notion's databases, you can add or delete them in Plato, and reload to update the data when the database is updated.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_17_1173)">
            <path
              d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z"
              fill="#323232"
            />
          </g>
          <defs>
            <clipPath id="clip0_17_1173">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Create Component Instances",
      desc: "Batch generate component instances through components+datasets",
    },
    // {
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth={1.5}
    //       stroke="currentColor"
    //       className="w-6 h-6"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
    //       />
    //     </svg>
    //   ),
    //   title: "I18n Switch",
    //   desc: "Maintain i18n data in Notion and switch between languages to achieve multi-language text switching. view your design in different languages by one click",
    // },
    // Icon Generation/ Text Generation / text translation/ database generation
    {
      title: "Icon Generation",
      desc: "Tell AI what you want, and it will generate the icon for you",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_17_855)">
            <path
              d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z"
              fill="#323232"
            />
            <path
              d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z"
              fill="#323232"
            />
            <path
              d="M12 16C10.52 16 9.25 15.19 8.55 14H6.88C7.68 16.05 9.67 17.5 12 17.5C14.33 17.5 16.32 16.05 17.12 14H15.45C14.76 15.19 13.48 16 12 16ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
              fill="#323232"
            />
          </g>
          <defs>
            <clipPath id="clip0_17_855">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Text Generation",
      desc: "Don't know what to say? AI will help you generate text",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_17_1176)">
            <path
              d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM5.92 19H5V18.08L14.06 9.02L14.98 9.94L5.92 19ZM20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3C17.4 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63Z"
              fill="#323232"
            />
          </g>
          <defs>
            <clipPath id="clip0_17_1176">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth={1.5}
          className="w-6 h-6"
        >
          <g clipPath="url(#clip0_6_15985)">
            <path
              d="M12.87 15.07L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H17V4H10V2H8V4H1V5.99H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.58L4 19L9 14L12.11 17.11L12.87 15.07ZM18.5 10H16.5L12 22H14L15.12 19H19.87L21 22H23L18.5 10ZM15.88 17L17.5 12.67L19.12 17H15.88Z"
              fill="#323232"
            />
          </g>
          <defs>
            <clipPath id="clip0_6_15985">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Text Translation",
      desc: "Translate text from one language to another",
    },
    {
      title: "Database Generation",
      desc: "Let AI help you mock data, then store them in Notion",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_17_4795)">
            <path
              d="M11.9998 3C11.5398 3 11.0698 3.04 10.5998 3.14C7.83983 3.67 5.63983 5.9 5.11983 8.66C4.63983 11.27 5.59983 13.67 7.33983 15.22C7.76983 15.6 7.99983 16.13 7.99983 16.69V19C7.99983 20.1 8.89983 21 9.99983 21H10.2798C10.6298 21.6 11.2598 22 11.9998 22C12.7398 22 13.3798 21.6 13.7198 21H13.9998C15.0998 21 15.9998 20.1 15.9998 19V16.69C15.9998 16.14 16.2198 15.6 16.6398 15.23C18.0898 13.95 18.9998 12.08 18.9998 10C18.9998 6.13 15.8698 3 11.9998 3ZM13.9998 17H9.99983V16H13.9998V17ZM9.99983 19V18H13.9998V19H9.99983ZM15.3098 13.74C15.2198 13.82 15.1498 13.92 15.0698 14H8.91983C8.83983 13.91 8.76983 13.81 8.67983 13.73C7.35983 12.55 6.76983 10.79 7.08983 9.03C7.44983 7.09 9.04983 5.48 10.9798 5.1C11.3198 5.03 11.6598 5 11.9998 5C14.7598 5 16.9998 7.24 16.9998 10C16.9998 11.43 16.3898 12.79 15.3098 13.74Z"
              fill="#323232"
            />
            <path d="M12.5 11H11.5V14H12.5V11Z" fill="#323232" />
            <path
              d="M10.3795 8.87371L9.67236 9.58081L11.7937 11.7021L12.5008 10.995L10.3795 8.87371Z"
              fill="#323232"
            />
            <path
              d="M11.5009 11.0052L12.208 11.7123L14.3293 9.59098L13.6222 8.88388L11.5009 11.0052Z"
              fill="#323232"
            />
          </g>
          <defs>
            <clipPath id="clip0_17_4795">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <SectionWrapper id="features">
      <div className="custom-screen text-gray-600">
        <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <li key={idx} className="space-y-3">
              <div className="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="text-lg text-gray-800 font-semibold">
                {item.title}
              </h4>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default Features;
