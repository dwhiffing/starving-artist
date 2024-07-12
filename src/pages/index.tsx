import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <NavBar />

      <Hero />

      <div className="flex flex-col items-center gap-y-2 px-10 py-20 text-center">
        <p className="font-garamond text-2xl">
          Subscribe to the Starving Artist Myth Newsletter and receive a free
          excerpt.
        </p>
        <p className="text-md font-garamond">
          Plus, get a discount code worth 10% off purchase of the book from the
          Dundurn Press Online Store
        </p>
        <p className="font-garamond text-xs">(conditions apply)</p>

        <Button className="my-3" href="/" label="Subscribe" />
      </div>

      <Footer />
    </main>
  );
}

function NavBar() {
  return (
    <nav className="hidden md:block">
      <div className="fixed inset-x-0 top-0 flex justify-end gap-8 p-5 font-din text-xl text-black">
        {/* <Link href="/">HOME</Link>
        <Link href="/">THE BOOK</Link>
        <Link href="/">THE AUTHOR</Link>
        <Link href="/">CREATIVE CAREERS</Link>
        <Link href="/">NEWSLETTER</Link>
        <Link href="/">CONTACT</Link> */}
      </div>
    </nav>
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

function Footer() {
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

function Hero() {
  return (
    <div className="bg-hero flex min-w-[375px] flex-col items-center justify-center gap-8 px-6 py-10 font-interstate text-xl text-black md:flex-row md:px-12 md:py-20 md:text-2xl">
      <div className="relative aspect-square w-[300px] md:w-[500px]">
        <Image
          alt="book"
          sizes="100vw"
          objectFit="contain"
          fill
          src="/starving-artist-render.png"
        />
      </div>

      <div className="flex flex-col justify-center gap-y-8">
        <div className="flex max-w-xl flex-col gap-2">
          <h2 className="font-interstate-black text-3xl uppercase tracking-[.2em] xl:text-5xl">
            Mark J. Jones
          </h2>
          <h3 className="">
            Dean, Faculty of Animation, Arts, and Design at Sheridan College
          </h3>
        </div>

        <div className="flex max-w-[350px] items-center justify-center bg-yellow px-3 py-4">
          <div className="font-league text-6xl uppercase">
            <span className="block text-3xl">The</span>
            <span className="-mt-1 block">Starving Artist</span>
            <span className="relative -mb-1 -mt-3 block font-cake normal-case text-red">
              Myth
            </span>
          </div>
        </div>

        <div className="flex max-w-xl flex-col gap-4">
          <p className="">
            Bust the Stereotype and Find Success in Creative Careers
          </p>
          <p className="font-interstate-black text-2xl uppercase tracking-widest">
            Available August 20, 2024
          </p>
        </div>

        <Button href="/" label="Pre-order here" />

        <Image
          className=""
          alt="book"
          src="/dundurn.png"
          height={150}
          width={150}
        />
      </div>
    </div>
  );
}

const Button = (props: { className?: string; href: string; label: string }) => (
  <Link href={props.href}>
    <button
      className={`bg-yellow px-6 py-3 text-black transition-colors hover:bg-red hover:text-white ${props.className ?? ""}`}
    >
      <span className="mt-[3px] block font-din text-2xl uppercase leading-none">
        {props.label}
      </span>
    </button>
  </Link>
);
