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
    URL: string;
    GitURL: string;
    assetPath: string;
  }
}

export {};
