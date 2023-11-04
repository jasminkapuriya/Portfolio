import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  tripguide,
  react,
  ionic,
  dimonds,
  Flipkart,
  Gittu,
  narola,
  rajesh
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
];

const services = [
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "UI Devloper",
    icon: web,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "IONIC",
    icon: ionic 
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "EnterPrise minds india pvt ltd (Flipkart)",
    icon: Flipkart,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "As per the design shared by UX team i created HTML",
      "Handled JavaScript side as well for validation and API integration using react query",
      "Integrated Payment Flow"
    ],
  },
  {
    title: "Software Engineer",
    company_name: "CHAR ARRAY PVT LTD.",
    icon: Gittu,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - May 2023",
    points: [
      "As per the design shared by UX team I created HTML",
      "Create App using IONIC framework.",
      "Handled JavaScript side as well for validation and API integration",
      "Design and created skeleton",
      "Create common component for dynamic form generation and handed over to team",
      "Design Webpage using HTML5, Tailwind-CSS",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "App Link: https://f.gittu.in/login",
      "Play store: - https://play.google.com/store/apps/details?id=io.ionic.gittu&hl=en-IN",
      "App store: - https://apps.apple.com/in/app/gittu/id6443723592"
    ],
  },
  {
    title: "UI Developer",
    company_name: "ADIS TECHNOLOGIES, Surat",
    icon: dimonds,
    iconBg: "#383E56",
    date: "Jan 2020 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js, HTML, CSS and other related technologies.",
      "Create Dimonds releted website and maintaing all the plateform.",
      "Handled JavaScript side as well for validation and API integration"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Narola Dimonds",
    description:
      "A dream of 4 visionaries. A mission to make a difference. A promise to keep customers' needs ahead of everything else. After three decades, we at NAROLA ...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: narola,
    source_code_link: "https://github.com/",
  },
  {
    name: "R.Rajes Export",
    description:
      "Making a diamond calls for relentless dedication and perseverance. At our company, we derive the true value of a diamond through our grading system, which is quite a result-oriented process, with a multi-step process. Through the RR Grading process, we raise the bar of diamond evaluation by looking beyond parameters such as color, clarity, carat and cut.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: rajesh,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
