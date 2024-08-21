// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function Handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: "John Doe" })/* The `;` in TypeScript is used to terminate statements.
  It signifies the end of a statement or expression. In
  the code snippet you provided, the `;` is used to end
  the statement that defines the type of the `res`
  parameter in the `Handler` function. */
  ;
}
