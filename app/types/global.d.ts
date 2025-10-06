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
    GitURL: string | undefined;
    assetPath: any;
  }

  interface skillsData {
    value: string;
    assetURL?: string;
  }

  interface ContactForm {
    contact_fullName: string;
    contact_email: string;
    contact_mobnr: string;
    contact_msg: string;
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

  type GlobalContent = {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
  };

  interface ContactFormProps {
    setViewFormAlert: (viewFormAlert: boolean) => void;
    setSuccessAlertLoading: (successAlertLoading: boolean) => void;
    setIsError: (isError: boolean) => void;
    contactFormRef: RefObject<HTMLFormElement | null>;
    isError: boolean;
    viewFormAlert: boolean;
    successAlertLoading: boolean;
  }

  interface onSubmitProps {
    setViewFormAlert: (viewFormAlert: boolean) => void;
    setSuccessAlertLoading: (successAlertLoading: boolean) => void;
    setIsError: (isError: boolean) => void;
    contactFormRef: React.RefObject<HTMLFormElement | null>;
  }
}

export {};
