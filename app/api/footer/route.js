import axios from "axios";
import { serverApi } from "@/config";

export const GET = async (req, res) => {
  // try {
  const { data } = await axios.get(serverApi.footer);
  return Response.json(data, { status: 200 });
  //} catch (e) {
  //  res.status(404).json(e.message);
  // }
};
