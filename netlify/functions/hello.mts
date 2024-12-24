import type { Context, Config } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  return {
    statusCode: 200,
    body: "HELLO",
  };
};

export const config: Config = {
  path: ["/sale/*", "/item/:sku"],
};
