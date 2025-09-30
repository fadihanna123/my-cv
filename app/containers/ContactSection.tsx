"use client";
import React, { FC, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  contactMe,
  email,
  fullName,
  message,
  mobile,
  send,
  sending,
  thanksForMsg_Text,
  weWillReachBack_Text,
} from "@utils/consts";
import { onSubmit } from "@functions/helper";

const ContactSection: FC = () => {
  const { register, handleSubmit } = useForm<ContactForm>();
  const [viewFormAlert, setViewFormAlert] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [successAlertLoading, setSuccessAlertLoading] =
    useState<boolean>(false);
  const contactFormRef = useRef<HTMLFormElement | null>(null);

  return (
    <div className="text-center mt-15 dark:text-neutral-300" id="contact">
      <h1 className="italic text-4xl mb-3">
        <i className="fa-solid fa-envelope"></i> {contactMe}
      </h1>
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
          <p className="text-red-500">
            Something went wrong. Please try again later.
          </p>
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
        </div>
        <div className="mb-5 text-center">
          <label
            className="block text-gray-700 text-lg font-bold dark:text-neutral-300"
            htmlFor="contact_email"
          >
            <i className="fa-solid fa-at mr-2"></i> {email}:
          </label>
          <input
            className="dark:placeholder-[#fff] placeholder-[#000] focus:placeholder-black border shadow appearance-none rounded py-2 px-3 leading-tight focus:shadow-outline focus:border-blue-500 focus:shadow-outline focus:ring-blue-500"
            type="email"
            {...register("contact_email")}
            required
            id="contact_email"
            placeholder="example@email.com"
          />
        </div>
        <div className="mb-5 text-center">
          <label
            className="block relative text-gray-700 text-lg font-bold dark:text-neutral-300"
            htmlFor="contact_mobnr"
          >
            <i className="fa-solid fa-mobile mr-2"></i> {mobile}:
          </label>
          <input
            className="dark:placeholder-[#fff] placeholder-[#000] focus:placeholder-black border shadow appearance-none rounded py-2 px-3 leading-tight focus:shadow-outline focus:border-blue-500 focus:shadow-outline focus:ring-blue-500"
            type="text"
            {...register("contact_mobnr")}
            id="contact_mobnr"
            pattern="[0-9]+"
            placeholder="07X-XXXXXXX"
          />
        </div>
        <div className="mb-5 text-center">
          <label
            className="block text-gray-700 text-lg font-bold dark:text-neutral-300"
            htmlFor="contact_msg"
          >
            <i className="fa-solid fa-comment mr-2"></i> {message}:
          </label>
          <textarea
            rows={4}
            cols={22}
            className="dark:placeholder-[#fff] placeholder-[#000] focus:placeholder-black border shadow appearance-none rounded py-2 px-3 sm:px-3 leading-tight focus:shadow-outline focus:border-blue-500 focus:shadow-outline focus:ring-blue-500"
            {...register("contact_msg")}
            id="contact_msg"
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
          {send}
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
