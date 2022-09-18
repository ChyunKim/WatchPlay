import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    res.setHeader("Set-Cookie", "a_name=Me;Max-age=0;HttpOnly, Secure");
    res.statusCode = 200;
    res.json({ message: "ok" });
  }
};
