import React from "react";
import { useForm } from "react-hook-form";

const ContactFullNameField = () => {
  const { register } = useForm<ContactForm>();

  return (
    <input
      className="border shadow appearance-none rounded py-2 px-3 leading-tight focus:border-blue-500 focus:shadow-outline focus:ring-blue-500"
      type="text"
      {...register("contact_fullName")}
      required
      id="contact_fullName"
    />
  );
};

export default ContactFullNameField;
