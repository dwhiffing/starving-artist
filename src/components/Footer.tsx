import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex h-[136px] flex-col gap-8 p-5">
      <div className="flex items-center justify-center gap-6 md:gap-12">
        {SOCIAL_LINKS.map((link) => (
          <Link key={link.image} href={link.link} target="_blank">
            <Image width={40} height={40} alt="facebook" src={link.image} />
          </Link>
        ))}
      </div>
      <span className="text-center font-garamond">
        © {new Date().getFullYear()} Starving Artist Myth Enterprises Inc.
      </span>
    </footer>
  );
}
const SOCIAL_LINKS = [
  {
    image: "/social/facebook.png",
    link: "https://www.facebook.com/starvingartistmyth",
  },
  {
    image: "/social/instagram.png",
    link: "https://www.instagram.com/starvingartistmyth",
  },
  {
    image: "/social/linkedin.png",
    link: "https://www.linkedin.com/groups/14483593/",
  },
  { image: "/social/threads.png", link: "https://www.threads.net/@cstage" },
  {
    image: "/social/substack.png",
    link: "https://starvingartistmyth.substack.com/",
  },
];
