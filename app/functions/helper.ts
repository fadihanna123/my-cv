import emailjs from "@emailjs/browser";
import { emailJSDetails } from "@app/utils/contact-consts";

export const toggleTheme = (
  darkMode: boolean,
  setDarkMode: (darkMode: boolean) => void,
) => {
  setDarkMode(!darkMode);
};

export const showPrevImage = (
  setIndex: (index: any) => void,
  images: string[],
) => {
  setIndex((index: number) => {
    if (index === 0) return images.length - 1;
    return index - 1;
  });
};

export const showNextImage = (
  setIndex: (index: any) => void,
  images: string[],
) => {
  setIndex((index: number) => {
    if (index === images.length - 1) return 0;
    return index + 1;
  });
};

export const onSubmit = (
  data: ContactForm,
  {
    setViewFormAlert,
    setSuccessAlertLoading,
    setIsError,
    contactFormRef,
  }: onSubmitProps,
) => {
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
