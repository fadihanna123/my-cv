import { FC } from "react";
import { useForm } from "react-hook-form";

// Components
import { onSubmit } from "@functions/helper";
import ContactBtn from "./ContactBtn";
import ContactFullNameField from "./ContactFullNameField";
import ContactEmailField from "./ContactEmailField";
import ContactMobNrField from "./ContactMobNrField";
import ContactMsgField from "./ContactMsgField";
import {
  contactErrorMsg,
  sending,
  thanksForMsg_Text,
  weWillReachBack_Text,
} from "@app/utils";

const ContactForm: FC<ContactFormProps> = ({
  setViewFormAlert,
  setSuccessAlertLoading,
  setIsError,
  contactFormRef,
  isError,
  viewFormAlert,
  successAlertLoading,
}) => {
  const { handleSubmit } = useForm<ContactForm>();

  return (
    <form
      onSubmit={handleSubmit((data) =>
        onSubmit(data, {
          setViewFormAlert,
          setSuccessAlertLoading,
          setIsError,
          contactFormRef,
        }),
      )}
      ref={contactFormRef}
      className="max-w-sm mx-auto"
    >
      {isError && !viewFormAlert && (
        <p className="text-red-500">{contactErrorMsg}</p>
      )}
      {successAlertLoading && (
        <div className="flex justify-center">
          <div
            className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-15 py-3 shadow-md mb-2"
            role="alert"
          >
            <div className="flex">
              <div className="py-3 px-2">
                <i className="fa-solid fa-spinner animate-spin ml-2 mr-2 mx-1 fa-2xl"></i>
                <span className="font-bold">{sending}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {viewFormAlert && (
        <div className="flex justify-center">
          <div
            className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-3 py-3 shadow-md mb-2"
            role="alert"
          >
            <div className="flex">
              <div className="py-3">
                <i className="fa-solid fa-square-check text-teal-500 mr-2 mx-1 fa-2xl"></i>
              </div>
              <div>
                <p className="font-bold">{thanksForMsg_Text}</p>
                <p className="text-sm">{weWillReachBack_Text} 😊</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mb-5 text-center">
        <ContactFullNameField />
      </div>
      <div className="mb-5 text-center">
        <ContactEmailField />
      </div>
      <div className="mb-5 text-center">
        <ContactMobNrField />
      </div>
      <div className="mb-5 text-center">
        <ContactMsgField />
      </div>
      <ContactBtn />
    </form>
  );
};

export default ContactForm;
