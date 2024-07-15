import * as Components from "./blocks";

export const BlockRenderer = ({ blocks = [] }: { blocks: any }) => {
  return blocks.map((block: any, index: number) => {
    // in cases where a block gets unpublished
    if (!block?.sys?.contentType?.sys?.id) return null;
    const type = block.sys.contentType.sys.id;
    //@ts-ignore
    const Component = Components[type];
    if (!Component) return;
    return <Component key={index} sysId={block.sys.id} {...block.fields} />;
  });
};
