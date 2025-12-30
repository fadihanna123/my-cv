"use client";

import { FC, useEffect } from "react";
import * as Sentry from "@sentry/nextjs";
import NextError from "next/error";

const GlobalError: FC<GlobalErrorProps> = ({ error }: GlobalErrorProps) => {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <NextError statusCode={0} />
      </body>
    </html>
  );
};

export default GlobalError;
