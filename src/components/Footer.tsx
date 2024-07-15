import { getAssetUrl } from "@/utils";
import { IFooter } from "@/utils/contentful.d";
import Image from "next/image";
import Link from "next/link";

export function Footer(props: { footer?: IFooter }) {
  return (
    <footer className="flex flex-col gap-8 border-t border-[#222] px-5 py-10 text-white">
      <div className="flex items-center justify-center gap-6 md:gap-12">
        {props.footer?.fields.socialLinks?.map((link) => (
          <Link key={link.sys.id} href={link.fields.href} target="_blank">
            <Image
              width={40}
              height={40}
              alt="facebook"
              src={getAssetUrl(link.fields.image)}
            />
          </Link>
        ))}
      </div>
      <span className="text-center font-garamond">
        © {new Date().getFullYear()} Starving Artist Myth Enterprises Inc.
      </span>
    </footer>
  );
}
