import { withSentry } from "@sentry/nextjs";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};

export default withSentry(handler);
