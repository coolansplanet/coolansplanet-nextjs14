/* eslint eqeqeq: 0 */
import { getOnePublication } from "@/helpers/provider";
import Image from "@/components/Publication.page/Image";
import { urlBase, pageUrl } from "@/config";
import memoize from "lodash/memoize";
import styles from "./page.module.scss";

const getData = memoize(async (id) => {
  try {
    const { data } = await getOnePublication(id);
    return data;
  } catch (error) {
    console.error("Error fetching publication data", error.message);
    return {};
  }
});

export const generateMetadata = async ({ params }) => {
  const { title, imageUrl, publicationDate } = await getData(params.id);

  const description = "Yet another joke :P";

  const images = [
    {
      url: urlBase + imageUrl,
    },
  ];

  return {
    openGraph: {
      title,
      images,
      description,
      type: "article",
      url: urlBase + pageUrl.publications.replace("[id]", params.id),
      article: {
        publishedTime: publicationDate,
      },
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@coolansplanet",
      images,
    },
  };
};

const Publication = async ({ params }) => {
  const { imageUrl } = await getData(params.id);

  return <Image url={imageUrl} />;
};

export default Publication;
