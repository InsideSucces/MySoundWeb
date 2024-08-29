import type { NextApiRequest, NextApiResponse } from "next";
import api_service from "@/lib/api_service"



export default async function Handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const { method } = req;
    switch (method) {
      case "GET":
        let {artist_id} = req.query
        await api_service.get(`/api/artists/${artist_id}`).then((response) => {
          res.status(200).json(response.data);
        });
        break;
      default:
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }