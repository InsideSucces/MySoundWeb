// Next.js API route support: https://nextjs.org/docs/api-rotroduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
export default function Handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: "John Doe" });
}
