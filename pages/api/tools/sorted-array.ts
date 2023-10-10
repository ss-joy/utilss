import type { customApiResponse } from "@/types/custom-api-response";
import createSortedArray from "@/utils/createSortedArray";
import { NextApiRequest, NextApiResponse } from "next";
type RequestBody = {
  startValue: number;
  endValue: number;
};
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const body: RequestBody = JSON.parse(req.body);
    try {
      const ans = createSortedArray(body.startValue, body.endValue);
      const response: customApiResponse = {
        message: "array successfully created",
        status: "success",
        data: ans,
      };
      return res.status(200).json(response);
    } catch (e) {
      const response: customApiResponse = {
        status: "error",
        message: "internal server error",
      };
      return res.status(500).json(response);
    }
  } else {
    let response: customApiResponse = {
      status: "error",
      message: "url not found",
    };
    return res.status(404).json(response);
  }
}
