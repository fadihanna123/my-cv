import emailjs from "@emailjs/browser";
import { emailJSDetails } from "@utils/consts";

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
  { setViewFormAlert, setSuccessAlertLoading }: onSubmitProps,
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
    )
    .then(
      () => {
        setViewFormAlert(true);
        setSuccessAlertLoading(false);
      },
      (error) => {
        // eslint-disable-next-line no-console
        console.log("FAILED...", error);
        setSuccessAlertLoading(false);
      },
    );
};
