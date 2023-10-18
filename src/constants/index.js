import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    ecomgroup,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    github,
    sba,
    elkafi,
    elkafigroup,
    kayakigroup
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
      title: "Mern stack Developer",
      icon: web,
    },
    {
      title: "React Js Developer",
      icon: mobile,
    },
    {
      title: "Three Js Developer",
      icon: backend,
    },
    {
      title: "ui/ux Designer ",
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
      name:"GitHub",
      icon: github
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
      id:1,
      title: "React.js Developer, ui/ux Designer and team leader",
      company_name: "multidisciplinary project at ESI SBA ",
      icon: sba,
      iconBg: "#E6DEDD",
      date: "March 2023 - May 2023",
      points: [
        "Developement of an e-commerce solution for an online store using React.js and other related technologies.",
        "Collaborating with cross-functional members including product managers,Back-end developers,mobile developers to create high-quality product.",
        "Ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback between team members.",
      ],
    },
    {
      id:2,
      title: "Front-end Developer ui/ux Designer ",
      company_name: "El Kafi Training ",
      icon: elkafi,
      iconBg: "#383E56",
      date: "September 2023 - Octobre 2023",
      points: [
        "Develop a cutting-edge online platform that bridges the gap between medical training and school support, providing accessible and high-quality learning experiences for all.",
        "Collaborating with EURL El Kafi and product managers to support users needs.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        
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
      name: "KAYAKI ",
      description:
        "Web-based platform that allows users to search, book, and manage KAYAK rentals from various areas, providing a convenient and efficient solution for a summer activity.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: kayakigroup,
      source_code_link: "https://github.com/Leyna911/kayaki.git",
      project_link:'https://kayakrenti.netlify.app/'
    },
    {
      name: "EL KAFI TRAINING",
      description:
        "Developing an online education and creating a user-friendly website allowing users to explore, discover, and register for medical courses and school support programs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "emailJs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: elkafigroup,
      source_code_link: "https://github.com/Leyna911/ELKAFI_Training-.git",
      project_link:'https://elkafi-training.netlify.app/'
    },
    {
      name: "GYM RAT",
      description:
        "build an e-commerce boutique and develop a user-friendly online platform that provides easy navigation and a seamless shopping experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: ecomgroup,
      source_code_link: "https://github.com/",
      project_link:''
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };