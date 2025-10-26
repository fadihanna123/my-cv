import { email } from "@app/utils";
import { useForm } from "react-hook-form";

const ContactEmailField = () => {
  const { register } = useForm<ContactForm>();

  return (
    <>
      <label
        className="block text-gray-700 text-lg font-bold dark:text-neutral-300"
        htmlFor="contact_email"
      >
        <i className="fa-solid fa-at mr-2"></i> {email}:
      </label>
      <input
        className="dark:placeholder-white placeholder-black focus:placeholder-black border shadow appearance-none rounded py-2 px-3 leading-tight focus:shadow-outline focus:border-blue-500 focus:shadow-outline focus:ring-blue-500"
        type="email"
        {...register("contact_email")}
        required
        id="contact_email"
        placeholder="example@email.com"
      />
    </>
  );
};

export default ContactEmailField;
