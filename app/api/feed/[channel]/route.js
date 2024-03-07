import { getPublications } from "@/helpers/provider";
import { feedConfig, urlFiles, urlBase } from "@/config";
import { Feed } from "feed";

export const GET = async (req, { params }) => {
  const { data: items } = await getPublications();

  const feed = new Feed({
    ...feedConfig.settings,
    updated: new Date(items[0].publicationDate),
  });

  items.forEach(({ id, title, publicationDate, imageUrl }) => {
    const image = urlFiles + imageUrl;
    const link = urlBase + `/publication/${id}`;

    feed.addItem({
      id: link,
      title,
      link,
      image,
      //description: item.summary,
      date: new Date(publicationDate),
      content: `<img src="${image}" style="width:100%; height:auto"/>`,
      author: feedConfig.settings.author,
    });
  });

  const channel = params.channel;

  const { version, contentType } = feedConfig.channelData[channel];

  /*res.setHeader("content-type", contentType);
  res.write(feed[channel + version]());
  res.end();*/
  return new Response(feed[channel + version](), {
    headers: { "content-type": contentType },
  });
};
