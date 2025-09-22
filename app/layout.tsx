import React from "react";
import emailjs from "@emailjs/browser";
import { GoogleAnalytics } from "@next/third-parties/google";

// Components
import "@styles/index.css";
import { emailJSDetails } from "@utils/consts";

emailjs.init({
  publicKey: emailJSDetails.publicKey,
});

const rootLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Fadi Hanna" />
        <meta
          name="keywords"
          content="Fadi Hanna, CV, Portfolio, Experience, Projects, Education"
        />
        <meta
          name="description"
          content="🧑‍💼My CV is my portfolio website to show my experiences, projects and education."
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="#" />
        <title> Fadi Hanna - CV </title>
      </head>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-ZP6HC56EFF" />
    </html>
  );
};

export default rootLayout;
