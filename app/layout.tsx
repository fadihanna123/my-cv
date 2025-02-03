import React from "react";

// Components
import "@styles/index.css";

const rootLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
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
    </html>
  );
};

export default rootLayout;
