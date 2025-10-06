import React, { FC, useRef, useState } from "react";
import { contactMe } from "@utils/consts";
import ContactForm from "./ContactForm";

const ContactSection: FC = () => {
  const [viewFormAlert, setViewFormAlert] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [successAlertLoading, setSuccessAlertLoading] =
    useState<boolean>(false);
  const contactFormRef = useRef<HTMLFormElement | null>(null);

  return (
    <div className="text-center mt-15 dark:text-neutral-300" id="contact">
      <h1 className="italic text-4xl mb-3">
        <i className="fa-solid fa-envelope"></i> {contactMe}
      </h1>
      <ContactForm
        setViewFormAlert={setViewFormAlert}
        successAlertLoading={successAlertLoading}
        setSuccessAlertLoading={setSuccessAlertLoading}
        isError={isError}
        viewFormAlert={viewFormAlert}
        setIsError={setIsError}
        contactFormRef={contactFormRef}
      />
    </div>
  );
};

export default ContactSection;
