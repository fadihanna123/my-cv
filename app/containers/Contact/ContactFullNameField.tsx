import { fullName } from "@app/utils";
import { useForm } from "react-hook-form";

const ContactFullNameField = () => {
  const { register } = useForm<ContactForm>();

  return (
    <>
      <label
        className="block text-gray-700 text-lg font-bold dark:text-neutral-300"
        htmlFor="contact_fullName"
      >
        <i className="fa-solid fa-user mr-2"></i>
        {fullName}:
      </label>
      <input
        className="border shadow appearance-none rounded py-2 px-3 leading-tight focus:border-blue-500 focus:shadow-outline focus:ring-blue-500"
        type="text"
        {...register("contact_fullName")}
        required
        id="contact_fullName"
      />
    </>
  );
};

export default ContactFullNameField;
