import { FC } from "react";
import { useForm } from "react-hook-form";

// Components
import { message } from "@app/utils";

const ContactMsgField: FC = () => {
  const { register } = useForm<ContactForm>();

  return (
    <>
      <label
        className="block text-gray-700 text-lg font-bold dark:text-neutral-300"
        htmlFor="contact_msg"
      >
        <i className="fa-solid fa-comment mr-2"></i> {message}:
      </label>
      <textarea
        rows={4}
        cols={19}
        className="dark:placeholder-white placeholder-black focus:placeholder-black border shadow appearance-none rounded py-2 px-3 sm:px-3 leading-tight focus:shadow-outline focus:border-blue-500 focus:shadow-outline focus:ring-blue-500"
        {...register("contact_msg")}
        id="contact_msg"
        required
        placeholder="Your message..."
      ></textarea>
    </>
  );
};

export default ContactMsgField;
