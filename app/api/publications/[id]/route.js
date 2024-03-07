import axios from "axios";
import { serverApi } from "@/config";

export const GET = async (req, { params }) => {
  //try {
  const id = params.id;
  const { data } = await axios.get(`${serverApi.publications}/${id}`);
  return Response.json(data, { status: 200 });

  //} catch (e) {
  //  res.status(404).json(e.message);
  //}
};
