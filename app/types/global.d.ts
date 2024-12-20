declare global {
  interface TxtSectionProps {
    title: string;
    fromDate: string;
    toDate: string;
    company: string;
    location: string;
  }

  interface expeEduData {
    id: number;
    title: string;
    fromDate: string;
    toDate: string;
    company: string;
    location: string;
  }

  interface projectData {
    id: number;
    title: string;
    desc: string | undefined;
    URL: string | undefined;
    GitURL: string;
    assetPath: any;
  }

  interface skillsData {
    id: number;
    value: string;
    icon: string;
  }

  type ImagesKeys =
    | "myProfilePic"
    | "Pixabayfinder"
    | "CameraWebsite"
    | "ChatMe"
    | "CV_React"
    | "Datahjalp"
    | "Dinrestaurang"
    | "Intranat"
    | "My_CV"
    | "E_handelProject"
    | "ChatApp2";

  declare module "*.JPG";
}

export {};
