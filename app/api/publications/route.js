import axios from "axios";
import { serverApi } from "@/config";

export const GET = async () => {
  // try {
  const { data } = await axios.get(serverApi.publications);
  return Response.json(data, { status: 200 });
  // } catch (e) {
  //   res.status(404).json(e.message);
  // }
};
