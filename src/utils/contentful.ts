import * as contentful from "contentful";
import { IPageProps } from ".";
import { IFooter, IMeta, IPage } from "./contentful.d";

let client: contentful.ContentfulClientApi;
const getClient = () => {
  if (!client)
    client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE || "",
      accessToken: process.env.CONTENTFUL_TOKEN || "",
    });
  return client;
};

export const getPage = async (name: string) => {
  const response = await getClient().getEntries({
    content_type: "page",
    include: 4,
  });
  const pages = response.items as IPage[];

  return pages.find((page: IPage) => page.fields.slug === name);
};

export async function getPageProps(pageName?: string) {
  let page = null;
  if (pageName) page = await getPage(pageName);
  // const navigation = await getNavigation();

  const meta = await getMeta();
  const footer = await getFooter();

  return {
    page,
    meta,
    footer,
  } as IPageProps;
}

// export const getNavigation = async () => {
//   const response = await getClient().getEntries({
//     content_type: "navigation",
//     include: 4,
//   });
//   const items = response.items as INavigation[];
//   return items[0];
// };

export const getMeta = async () => {
  const response = await getClient().getEntries({
    content_type: "meta",
    include: 4,
  });
  return response.items[0] as IMeta;
};

export const getFooter = async () => {
  const response = await getClient().getEntries({
    content_type: "footer",
    include: 4,
  });
  return response.items[0] as IFooter;
};
