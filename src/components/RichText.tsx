import * as types from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import { contentfulLoader } from "@/utils/contentfulLoader";
import { Button } from "./Button";

export const RichTextItem = ({ content }: { content: unknown }) => {
  return (
    <>
      {documentToReactComponents(content as Document, {
        renderNode: {
          [types.BLOCKS.HEADING_1]: (node, children) => (
            <h1 className="text-6xl">{children}</h1>
          ),
          [types.BLOCKS.HEADING_2]: (node, children) => (
            <h2 className="text-4xl">{children}</h2>
          ),
          [types.BLOCKS.HEADING_3]: (node, children) => (
            <h3 className="text-3xl">{children}</h3>
          ),
          [types.BLOCKS.HEADING_4]: (node, children) => (
            <h4 className="text-2xl">{children}</h4>
          ),
          [types.BLOCKS.HEADING_5]: (node, children) => (
            <h5 className="text-xl">{children}</h5>
          ),
          [types.BLOCKS.HEADING_6]: (node, children) => (
            <h6 className="text-sm">{children}</h6>
          ),
          [types.INLINES.HYPERLINK]: (node, children) => (
            <a href={node.data.uri} target="_blank" rel="noreferrer">
              {children}
            </a>
          ),
          [types.BLOCKS.PARAGRAPH]: (node, children) => {
            return <p className="">{children}</p>;
          },
          [types.BLOCKS.LIST_ITEM]: (node) => {
            //@ts-ignore
            return <li>{node.content[0].content[0].value}</li>;
          },
          [types.BLOCKS.EMBEDDED_ENTRY]: (node) => {
            const { label, href } = node.data.target.fields;
            return (
              <Button wrapperClassName="block" label={label} href={href} />
            );
          },

          [types.BLOCKS.EMBEDDED_ASSET]: (node) => (
            <Image
              loader={contentfulLoader}
              className="inline"
              src={`https:${node.data?.target?.fields?.file?.url}`}
              alt={node.data?.target?.fields?.title}
              width={node.data?.target?.fields.file.details.image.width}
              height={node.data?.target?.fields.file.details.image.height}
            />
          ),
        },
      })}
    </>
  );
};

export default RichTextItem;
