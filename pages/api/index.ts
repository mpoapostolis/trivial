// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const _res = await fetch(`${req.query["url"]}`);
  if (_res.status === 200) {
    res.statusCode = 200;
    res.json({
      msg: req.query["url"],
    });
  } else {
    res.statusCode = 401;
    res.json({
      msg: "not-found",
    });
  }
};
