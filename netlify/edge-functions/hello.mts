import type { Context, Config } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  return new Response(`Hello WORLD`);
};

export const config: Config = { path: "/test" };
