import React from "react";
import { useForm } from "react-hook-form";

const ContactEmailField = () => {
  const { register } = useForm<ContactForm>();

  return (
    <input
      className="dark:placeholder-[#fff] placeholder-[#000] focus:placeholder-black border shadow appearance-none rounded py-2 px-3 leading-tight focus:shadow-outline focus:border-blue-500 focus:shadow-outline focus:ring-blue-500"
      type="email"
      {...register("contact_email")}
      required
      id="contact_email"
      placeholder="example@email.com"
    />
  );
};

export default ContactEmailField;
