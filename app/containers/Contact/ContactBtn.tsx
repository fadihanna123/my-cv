import { send } from "@app/utils/consts";
import React from "react";

const ContactBtn = () => {
  return (
    <button
      className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline focus:border-blue-500 focus:shadow-outline focus:ring-blue-500"
      type="submit"
      value="Send"
    >
      <i className="fa-solid fa-paper-plane mr-2"></i>
      {send}
    </button>
  );
};

export default ContactBtn;
