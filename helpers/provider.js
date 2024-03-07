import axios from "axios";
import { api } from "@/config";

export const getPublications = () => axios.get(api.publications);

export const getOnePublication = (id) => axios.get(api.publications + "/" + id);

export const getAboutPageData = () => axios.get(api.about);

export const getHomePageCover = () => axios.get(api.homePageCover);

export const getFooterData = () => axios.get(api.footer);
