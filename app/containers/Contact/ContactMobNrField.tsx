import React from "react";
import { useForm } from "react-hook-form";

const ContactMobNrField = () => {
  const { register } = useForm<ContactForm>();

  return (
    <input
      className="dark:placeholder-[#fff] placeholder-[#000] focus:placeholder-black border shadow appearance-none rounded py-2 px-3 leading-tight focus:shadow-outline focus:border-blue-500 focus:shadow-outline focus:ring-blue-500"
      type="text"
      {...register("contact_mobnr")}
      id="contact_mobnr"
      pattern="[0-9]+"
      placeholder="07X-XXXXXXX"
    />
  );
};

export default ContactMobNrField;
