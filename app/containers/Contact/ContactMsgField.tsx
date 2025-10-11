import React from "react";
import { useForm } from "react-hook-form";

const ContactMsgField = () => {
  const { register } = useForm<ContactForm>();

  return (
    <textarea
      rows={4}
      cols={19}
      className="dark:placeholder-[#fff] placeholder-[#000] focus:placeholder-black border shadow appearance-none rounded py-2 px-3 sm:px-3 leading-tight focus:shadow-outline focus:border-blue-500 focus:shadow-outline focus:ring-blue-500"
      {...register("contact_msg")}
      id="contact_msg"
      required
      placeholder="Your message..."
    ></textarea>
  );
};

export default ContactMsgField;
