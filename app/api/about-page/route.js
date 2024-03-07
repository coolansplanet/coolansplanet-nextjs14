import axios from "axios";
import { serverApi } from "@/config";

export const GET = async (req) => {
  //try {
  const { data } = await axios.get(serverApi.about);
  return Response.json(data, { status: 200 });
  //  } catch (e) {
  //  res.status(404).json(e.message);
  //  }
};
