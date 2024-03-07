import { faRssSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitter,
  faPinterest,
  faTelegramPlane,
  faMastodon,
} from "@fortawesome/free-brands-svg-icons";

export const googleAnalytics = {
  trackingId: "G-9W0KJESB0Q",
};

export const environmentsData = {
  development: {
    urlBase: "http://localhost:3000",
    urlFiles: "http://localhost:3000",
    serverApiUrl: "https://strapi-uysh.onrender.com/api", //"http://localhost:1337",
  },
  production: {
    urlBase: "https://coolansplanet.com",
    urlFiles: "https://coolansplanet.com",
    serverApiUrl: "http://strapi-uysh:10000/api",
  },
};

export const { urlBase, serverApiUrl, urlFiles } =
  environmentsData[process.env.NODE_ENV];

export const apiUrl = `${urlBase}/api`;

export const api = {
  publications: apiUrl + "/publications",
  about: apiUrl + "/about-page",
  homePageCover: apiUrl + "/homepage-cover",
  footer: apiUrl + "/footer",
  feed: apiUrl + "/feed",
  uploads: apiUrl + "/uploads",
};

export const title = "Coolans Planet";
export const description = "Comic strips";
export const images = [
  { url: "https://coolansplanet.com/uploads/Episode_3_34b26b5366.png" },
];

export const metadata = {
  title,
  description,
  manifest: "/manifest.json",
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IE",
    url: urlBase,
    siteName: "Coolans Planet",
    images,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@coolansplanet",
    //  creatorId: '1467726470533754880',
    //  siteId: '1467726470533754880',
    images,
  },
  facebook: {
    title,
    description,
    appId: "100063618518510",
    images,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/icon.svg",
    /*
    shortcut: '/shortcut-icon.png',
   
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },*/
  },
};

export const channels = {
  rss: {
    url: api.feed + "/rss",
    version: 2,
    type: "application/rss+xml",
    contentType: "text/xml",
    title: "Coolans Planet RSS Channel",
  },
  atom: {
    url: api.feed + "/atom",
    version: 1,
    type: "application/atom+xml",
    contentType: "text/xml",
    title: "Coolans Planet Atom Channel",
  },
  json: {
    url: api.feed + "/json",
    version: 1,
    type: "application/feed+json",
    contentType: "application/json",
    title: "Coolans Planet JSON Feed Channel",
  },
};

export const viewport = {
  themeColor: "#02040b",
  width: "device-width",
  initialScale: 1,
};

export const headConfig = {
  linkTags: [
    ...Object.values(channels).map(({ type, title, url }) => {
      return {
        type,
        title,
        href: url,
        rel: "alternate",
      };
    }),
  ],
};

export const pageUrl = {
  home: "/",
  about: "/about",
  publications: "/publications/[id]",
};

export const serverApi = {
  publications: serverApiUrl + "/publications",
  homePageCover: serverApiUrl + "/homepage-cover",
  footer: serverApiUrl + "/footer",
  about: serverApiUrl + "/about-page",
};

export const navigationConfig = [
  { name: "homePage", path: pageUrl.home, label: "Home" /*, isExact: true*/ },
  { name: "about", path: pageUrl.about, label: "About" /*, isExact: true*/ },
];

export const socialNetworkLinks = {
  facebook: {
    link: "https://www.facebook.com/CoolansPlanet",
    icon: faFacebookSquare,
    title: "Facebook",
  },
  twitter: {
    link: "https://twitter.com/coolansplanet",
    icon: faTwitter,
    title: "Twitter",
  },
  pinterest: {
    link: "https://www.pinterest.com/coolansplanet/coolans-planet",
    icon: faPinterest,
    title: "Pinterest",
  },
  telegram: {
    link: "https://t.me/coolansplanet",
    icon: faTelegramPlane,
    title: "Telegram",
  },
  mastodon: {
    link: "https://mastodon.social/@coolansplanet",
    icon: faMastodon,
    title: "Mastodon",
  },
  rss: {
    link: channels.rss.url,
    icon: faRssSquare,
    title: channels.rss.title,
    type: channels.rss.type,
  },
};

export const feedConfig = {
  settings: {
    id: urlBase,
    link: urlBase,
    title,
    description,
    category: "Humor",
    language: "en",
    image: urlBase + "/favicon.svg",
    favicon: urlBase + "/favicon.svg",
    copyright: `All rights reserved ${new Date().getFullYear()}, Coolans Planet`,
    generator: "Coolans Planet",
    feedLinks: {
      rss: channels.rss.url,
      atom: channels.atom.url,
      json: channels.json.url,
    },
    author: {
      name: "Herman",
      //email: "coolansplanet@gmail.com",
      link: "https://coolansplanet.com/about",
    },
  },
  channelData: channels,
  //defaultChannel: "rss";
};
