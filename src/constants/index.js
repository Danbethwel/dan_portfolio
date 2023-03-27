import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Carvezz Enterprises",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Kabarak University",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - April 2023",
    points: [
      "Developing  LMS systems for online education",
      "Database Development",
      "Cyber Security",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Looking for a Job",
    company_name: "web dev",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Dec 2023",
    points: [
      "-------------------",
      "-------------------",
      "-------------------",
      "-------------------",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Dan proved me wrong.",
    name: "Carvezz",
    designation: "C.E.0",
    company: "Carvezz Ent",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Dan does.",
    name: "Hanningtone",
    designation: "CEO",
    company: "Int Care",
    image: "https://randomuser.me/api/portraits/men/83.jpg",
  },
  {
    testimonial:
      "Dan was able to develop a blockchain technolgy which was able to create a cryptocurrency",
    name: "Cleophas Mochoge",
    designation: "Project Supervisor",
    company: "Kabarak University",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
  },
];

const projects = [
  {
    name: "Block",
    description:
      "A  web-based application that uses blockchain technology to enable secure, transparent, and decentralized interactions between users. A blockchain is a distributed ledger technology that allows multiple parties to store and share data in a secure and tamper-proof manner.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Danbethwel",
  },
  {
    name: "Carvezz",
    description:
      "A digital agency website  that showcases the services and offerings of a Carvezz. The website is typically designed to be visually appealing and user-friendly, with a focus on providing a clear and concise message about Carvezz capabilities and expertise.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Danbethwel",
  },
  {
    name: "Inter Heathcare",
    description:
      "A comprehensive ecommerce website that users can buy medical equipmenits with ease healthcare providers can also manage and track medical equipment. The application typically includes features such as inventory management, maintenance scheduling, and equipment tracking",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Danbethwel",
  },
];

export { services, technologies, experiences, testimonials, projects };
