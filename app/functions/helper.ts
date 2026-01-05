import emailjs from "@emailjs/browser";

// Components
import { emailJSDetails } from "@app/utils";

// toggleTheme: toggle the theme between dark and light
export const toggleTheme = (
  darkMode: boolean,
  setDarkMode: (darkMode: boolean) => void,
): void => setDarkMode(!darkMode);

// showPrevImage: show the previous image in carousel
export const showPrevImage = (
  setIndex: (index: any) => void,
  images: string[],
): void => {
  setIndex((index: number) => {
    if (index === 0) return images.length - 1;
    return index - 1;
  });
};

// showNextImage: show the next image in carousel
export const showNextImage = (
  setIndex: (index: any) => void,
  images: string[],
): void => {
  setIndex((index: number) => {
    if (index === images.length - 1) return 0;
    return index + 1;
  });
};

// onSubmit: handle the contact form submission
export const onSubmit = (
  data: ContactForm,
  {
    setViewFormAlert,
    setSuccessAlertLoading,
    setIsError,
    contactFormRef,
  }: onSubmitProps,
): void => {
  const templateParams: Record<keyof ContactForm, string> = {
    contact_fullName: data.contact_fullName,
    contact_email: data.contact_email,
    contact_mobnr: data.contact_mobnr,
    contact_msg: data.contact_msg,
  };

  setViewFormAlert(false);
  setSuccessAlertLoading(true);

  emailjs
    .send(
      emailJSDetails.serviceId as string,
      emailJSDetails.templateId as string,
      templateParams,
      emailJSDetails.publicKey as string,
    )
    .then(
      () => {
        setViewFormAlert(true);
        setSuccessAlertLoading(false);
        contactFormRef.current?.reset();
      },
      () => {
        setIsError(true);
        setSuccessAlertLoading(false);
      },
    );
};
