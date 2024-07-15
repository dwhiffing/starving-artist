import { Asset } from "contentful";
import { NextPage } from "next";
import { BlockRenderer } from "../components/BlockRenderer";
import { Layout } from "../components/Layout";
import { IFooter, IMeta, IPage } from "./contentful.d";
import { getPageProps } from "./contentful";

export interface IPageProps {
  page: IPage;
  meta: IMeta;
  footer: IFooter;
}

export const getAssetUrl = (asset: Asset, width?: number, height?: number) => {
  return (
    `https:${asset?.fields?.file?.url}${width ? `?w=${width}` : ""}${
      height ? `&h=${height}` : ""
    }` || ""
  );
};

export const getAssetDimensions = (asset?: Asset) => {
  return asset?.fields.file.details.image;
};

export const DefaultPage: NextPage<IPageProps> = (props) => (
  <Layout title={props.page.fields.title} {...props}>
    <BlockRenderer blocks={props.page?.fields.blocks} />
  </Layout>
);

export const defaultStaticProps = (key?: string) => async () => {
  const props = await getPageProps(key);

  return { props };
};
