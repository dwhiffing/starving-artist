import Image from "next/image";
import { Button } from "../Button";
import Script from "next/script";
import { IHeroBlockFields } from "@/utils/contentful.d";
import { getAssetUrl } from "@/utils";
import RichTextItem from "../RichText";

export function HeroBlock(props: IHeroBlockFields) {
  return (
    <div className="flex flex-col">
      <div className="bg-hero flex-col-center flex-1 p-6 md:p-8 lg:p-12 xl:flex-row">
        <div className="relative aspect-square min-w-[350px] md:min-w-[450px] xl:min-w-[500px] 2xl:min-w-[600px]">
          <Image
            alt="book"
            className="object-contain"
            fill
            priority
            src={getAssetUrl(props.heroImage)}
          />
        </div>

        <div className="flex-col-center max-w-3xl gap-y-8 text-center font-interstate xl:items-start xl:text-left">
          <div className="flex flex-col gap-y-4 text-center text-xl xl:items-start xl:text-left">
            <RichTextItem content={props.content} />
          </div>

          <p className="font-interstate-black text-4xl uppercase tracking-widest">
            {props.releaseDateLabel}
          </p>

          {props.buttonHref && props.buttonLabel && (
            <Button href={props.buttonHref} label={props.buttonLabel} />
          )}

          <Image
            className=""
            alt="book"
            src="/dundurn.png"
            height={150}
            width={150}
          />
        </div>
      </div>

      <SubscribeBlock
        heading={props.subscribeHeading}
        body={props.subscribeBody}
      />
    </div>
  );
}

function SubscribeBlock(props: { heading: string; body: string }) {
  return (
    <div className="bg-black p-10 text-white">
      <div className="flex flex-col gap-y-6 text-center">
        <p className="-mb-3 font-garamond text-2xl">{props.heading}</p>
        <p className="text-md font-garamond">{props.body}</p>

        <>
          <div id="custom-substack-embed" />
          <Script id="substack">
            {`window.CustomSubstackWidget = {
              substackUrl: "starvingartistmyth.substack.com",
              placeholder: "example@gmail.com",
              buttonText: "Subscribe",
              theme: "custom",
              colors: { primary: "#FADD27", input: "#000000", email: "#FFFFFF", text: "#000000" },
            };`}
          </Script>
          <Script src="https://substackapi.com/widget.js" async />
        </>
      </div>
    </div>
  );
}
