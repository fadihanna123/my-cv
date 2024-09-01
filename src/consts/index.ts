const IMAGES = {
  myProfilePic: new URL("../assets/myProfilePic.JPG", import.meta.url).href,
  Pixabayfinder: new URL("../assets/Pixabayfinder.png", import.meta.url).href,
  CameraWebsite: new URL("../assets/CameraWebsite.png", import.meta.url).href,
  ChatMe: new URL("../assets/ChatMe.png", import.meta.url).href,
  CV_React: new URL("../assets/CV_React.png", import.meta.url).href,
  Datahjalp: new URL("../assets/Datahjalp.png", import.meta.url).href,
  Dinrestaurang: new URL("../assets/Dinrestaurang.png", import.meta.url).href,
  Intranat: new URL("../assets/Intranat.png", import.meta.url).href,
};

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
    URL: "https://pixabayfinderx.netlify.app/",
    GitURL: "https://github.com/fadihanna123/PixabayFinder/",
    assetPath: IMAGES.Pixabayfinder,
  },
  {
    id: 2,
    title: "Intranat",
    URL: "https://intranet.gssonsel.se.185-133-206-116.bb.kringelstan.se/",
    GitURL: "https://github.com/fadihanna123/Intranat/",
    assetPath: IMAGES.Intranat,
  },
  {
    id: 3,
    title: "Datahjälp",
    URL: "https://fadihanna123.github.io/DatahjalpProjekt/",
    GitURL: "https://github.com/fadihanna123/DatahjalpProjekt/",
    assetPath: IMAGES.Datahjalp,
  },
  {
    id: 4,
    title: "Old My CV",
    URL: "",
    GitURL: "https://github.com/fadihanna123/CV_React/",
    assetPath: IMAGES.CV_React,
  },
  {
    id: 5,
    title: "Din Restaurang",
    URL: "",
    GitURL: "https://github.com/fadihanna123/Din_Restaurang/",
    assetPath: IMAGES.Dinrestaurang,
  },
  {
    id: 6,
    title: "Chat Me",
    URL: "",
    GitURL: "https://github.com/fadihanna123/chatMe/",
    assetPath: IMAGES.ChatMe,
  },
  {
    id: 7,
    title: "Camera Website",
    URL: "",
    GitURL: "https://github.com/fadihanna123/CameraWebsite/",
    assetPath: IMAGES.CameraWebsite,
  },
];

const skills = [
  {
    id: 1,
    value: "HTML",
  },
  {
    id: 2,
    value: "CSS",
  },
  {
    id: 3,
    value: "Javascript",
  },
];

export { expeData, eduData, projectData, IMAGES, skills };
