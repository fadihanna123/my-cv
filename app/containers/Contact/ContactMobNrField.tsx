import { mobile } from "@app/utils";
import { useForm } from "react-hook-form";

const ContactMobNrField = () => {
  const { register } = useForm<ContactForm>();

  return (
    <>
      <label
        className="block relative text-gray-700 text-lg font-bold dark:text-neutral-300"
        htmlFor="contact_mobnr"
      >
        <i className="fa-solid fa-mobile mr-2"></i> {mobile}:
      </label>
      <input
        className="dark:placeholder-white placeholder-black focus:placeholder-black border shadow appearance-none rounded py-2 px-3 leading-tight focus:shadow-outline focus:border-blue-500 focus:shadow-outline focus:ring-blue-500"
        type="text"
        {...register("contact_mobnr")}
        id="contact_mobnr"
        pattern="[0-9]+"
        placeholder="07X-XXXXXXX"
      />
    </>
  );
};

export default ContactMobNrField;
