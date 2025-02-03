"use client";
import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const ContactSection: FC = () => {
  const { register, handleSubmit } = useForm<ContactForm>();

  const onSubmit: SubmitHandler<ContactForm> = (data) => {
    return data;
  };

  return (
    <div className="text-center mt-15" id="contact">
      <h1 className="italic text-4xl mb-3">
        <i className="fa-solid fa-envelope"></i> Contact Me
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            className="block text-gray-700 text-lg font-bold"
            htmlFor="contact_fullName"
          >
            <i className="fa-solid fa-user mr-2"></i>
            Fullname:
          </label>
          <input
            className="border shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:border-blue-500 focus:shadow-outline focus:ring-blue-500"
            type="text"
            {...register("contact_fullName")}
            required
            id="contact_fullName"
          />
        </div>
        <div className="mb-5">
          <div className="flex justify-center items-center">
            <label
              className="block text-gray-700 text-lg font-bold"
              htmlFor="contact_email"
            >
              <i className="fa-solid fa-at"></i> Email:
            </label>
          </div>
          <input
            className="focus:placeholder-black border shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-blue-500 focus:shadow-outline focus:ring-blue-500"
            type="email"
            {...register("contact_email")}
            required
            id="contact_email"
            placeholder="example@email.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 text-lg font-bold"
            htmlFor="contact_mobnr"
          >
            <i className="fa-solid fa-mobile"></i> Mobil:
          </label>
          <input
            className="focus:placeholder-black border shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-blue-500 focus:shadow-outline focus:ring-blue-500"
            type="text"
            {...register("contact_mobnr")}
            id="contact_mobnr"
            pattern="[0-9]+"
            placeholder="07X-XXXXXXX"
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 text-lg font-bold"
            htmlFor="contact_msg"
          >
            <i className="fa-solid fa-comment"></i> Message:
          </label>
          <textarea
            rows={4}
            cols={22}
            className="focus:placeholder-black border shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-blue-500 focus:shadow-outline focus:ring-blue-500"
            {...register("contact_msg")}
            required
            placeholder="Your message..."
          ></textarea>
        </div>
        <button
          className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline focus:border-blue-500 focus:shadow-outline focus:ring-blue-500"
          type="submit"
          value="Send"
        >
          <i className="fa-solid fa-paper-plane mr-2"></i>
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
