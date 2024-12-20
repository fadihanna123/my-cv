import Pixabayfinder from "@assets/Pixabayfinder.png";
import CV_React from "@assets/CV_React.png";
import CameraWebsite from "@assets/CameraWebsite.png";
import ChatMe from "@assets/ChatMe.png";
import Datahjalp from "@assets/Datahjalp.png";
import Dinrestaurang from "@assets/Dinrestaurang.png";
import Intranat from "@assets/Intranat.png";
import ChatApp2 from "@assets/Chatapp2.png";
import My_CV from "@assets/my_cv.png";
import E_handelProject from "@assets/E-handelproject.png";

const carouselImageCollection = [
  CV_React,
  CameraWebsite,
  ChatMe,
  Datahjalp,
  Dinrestaurang,
  Intranat,
  Pixabayfinder,
];

const expeData: expeEduData[] = [
  {
    id: 1,
    title: "Fullstack developer – Internship",
    fromDate: "2024",
    toDate: "2024",
    company: "Luday",
    location: "Remote",
  },
  {
    id: 2,
    title: "IT consultant – Founder",
    fromDate: "2023",
    toDate: "2023",
    company: "Södertälje Techhouse",
    location: "Södertälje, Sweden",
  },
  {
    id: 3,
    title: "Dataadmin - Consultant",
    fromDate: "2022",
    toDate: "2022",
    company: "Academic Work",
    location: "Remote",
  },
  {
    id: 4,
    title: "System Developer",
    fromDate: "2022",
    toDate: "2022",
    company: "Rektron",
    location: "Solna, Sweden",
  },
  {
    id: 5,
    title: "Javascript Developer",
    fromDate: "2021",
    toDate: "2021",
    company: "Soltia",
    location: "Tumba and Älvsjö, Sweden",
  },
  {
    id: 6,
    title: "Web Developer - Consultant",
    fromDate: "2020",
    toDate: "2020",
    company: "Kringelstan Webagency",
    location: "Södertälje, Sweden",
  },
  {
    id: 7,
    title: "Web Developer - Internship",
    fromDate: "2020",
    toDate: "2020",
    company: "Kringelstan Webagency",
    location: "Södertälje, Sweden",
  },
  {
    id: 8,
    title: "Web Development Teacher",
    fromDate: "2020",
    toDate: "2020",
    company: "Wendela Hebbegymnasiet",
    location: "Södertälje, Sweden",
  },
];

const eduData: expeEduData[] = [
  {
    id: 1,
    title: "High Education Diploma with specialization in Computer Engineering",
    fromDate: "2018",
    toDate: "2020",
    company: "Mittuniversitetet",
    location: "Sundsvall, Sweden",
  },
  {
    id: 2,
    title: "Learn Front End development course",
    fromDate: "02/2023",
    toDate: "02/2023",
    company: "W3schools",
    location: "Remote",
  },
];

const projectData: projectData[] = [
  {
    id: 1,
    title: "PixabayFinder",
    desc: "🖼️ An app to fetch images and videos from Pixabay.",
    URL: "https://pixabayfinderx.netlify.app/",
    GitURL: "https://github.com/fadihanna123/PixabayFinder/",
    assetPath: Pixabayfinder,
  },
  {
    id: 2,
    title: "Intranat",
    desc: "🧑‍💼A dashboard application that helps staff communicate with their managers.",
    URL: "https://intranet.gssonsel.se.185-133-206-116.bb.kringelstan.se/",
    GitURL: "https://github.com/fadihanna123/Intranat/",
    assetPath: Intranat,
  },
  {
    id: 3,
    title: "Datahjälp",
    desc: "💻 Datahjälp is a company that informs customers about the company's prices and contact details for these companies. Datahjälp helps customers fix their computers.",
    URL: "https://fadihanna123.github.io/DatahjalpProjekt/",
    GitURL: "https://github.com/fadihanna123/DatahjalpProjekt/",
    assetPath: Datahjalp,
  },
  {
    id: 4,
    title: "Old My CV",
    desc: "🏢 A website to show my CV in webapplication.",
    URL: undefined,
    GitURL: "https://github.com/fadihanna123/CV_React/",
    assetPath: CV_React,
  },
  {
    id: 5,
    title: "Din Restaurang",
    desc: "🍔 A restaurantapplication and adminpanel as shows and manages 5 food types.",
    URL: undefined,
    GitURL: "https://github.com/fadihanna123/Din_Restaurang/",
    assetPath: Dinrestaurang,
  },
  {
    id: 6,
    title: "Chat Me",
    desc: "💬 A chatapplication to chat other people in the public chat. All messages will be shown in the chatroom.",
    URL: undefined,
    GitURL: "https://github.com/fadihanna123/chatMe/",
    assetPath: ChatMe,
  },
  {
    id: 7,
    title: "Camera Website",
    desc: undefined,
    URL: undefined,
    GitURL: "https://github.com/fadihanna123/CameraWebsite/",
    assetPath: CameraWebsite,
  },
  {
    id: 8,
    title: "My CV (current)",
    desc: "🧑‍💼My CV is my portfolio website to show my experiences, projects and education.",
    URL: "https://fadihanna123.github.io/my-cv",
    GitURL: "https://github.com/fadihanna123/my-cv",
    assetPath: My_CV,
  },
  {
    id: 9,
    title: "Billigast & Begagnade",
    desc: undefined,
    URL: undefined,
    GitURL: "https://github.com/fadihanna123/E-handelprojekt",
    assetPath: E_handelProject,
  },
  {
    id: 10,
    title: "Chat App 2",
    desc: undefined,
    URL: undefined,
    GitURL: "https://github.com/fadihanna123/chatapp",
    assetPath: ChatApp2,
  },
];

const skills: skillsData[] = [
  {
    id: 1,
    value: "ReactJS",
    icon: "react",
  },
  {
    id: 2,
    value: "Angular",
    icon: "angular",
  },
  {
    id: 3,
    value: "Javascript",
    icon: "js",
  },
  {
    id: 4,
    value: "PHP",
    icon: "php",
  },
  {
    id: 5,
    value: "Wordpress",
    icon: "wordpress",
  },
  {
    id: 6,
    value: "NodeJS",
    icon: "node",
  },
  {
    id: 7,
    value: "NPM",
    icon: "npm",
  },
  {
    id: 8,
    value: "HTML 5",
    icon: "html5",
  },
  {
    id: 9,
    value: "CSS",
    icon: "css3",
  },
  {
    id: 10,
    value: "Bootstrap",
    icon: "bootstrap",
  },
  {
    id: 11,
    value: "Git",
    icon: "git",
  },
  {
    id: 12,
    value: "Gulp",
    icon: "gulp",
  },
];

export { carouselImageCollection, eduData, expeData, projectData, skills };
