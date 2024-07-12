import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Starving Artist Myth - By Mark J. Jones</title>
        <meta property="og:type" content="book" />
        <meta
          property="og:title"
          content="The Starving Artist Myth - By Mark J. Jones"
        />
        <meta property="og:url" content="https://starving-artist.vercel.app/" />
        <meta
          property="og:image"
          content="https://starving-artist.vercel.app/social/og.jpg"
        />
        <meta
          property="og:description"
          content="In The Starving Artist Myth, Mark J. Jones addresses the doubt about opportunities in the creative economy by getting at the roots of the stereotype and answering the what, the why, and the how of achieving career goals. Featuring interviews of artists across the spectrum of creative fields and a practical career guide, The Starving Artist Myth lays out a manual for creative career success in a post-pandemic world."
        />
        <meta property="book:isbn" content="9781459753846" />
        <meta property="book:author" content="Mark J Jones" />
        <meta property="book:release_date" content="2024-08-20" />
      </Head>

      <main className="min-w-[375px] text-black">
        <NavBar />

        <Hero />

        <Subscribe />

        <Footer />
      </main>
    </>
  );
}

function Hero() {
  return (
    <div className="bg-hero flex-col-center px-6 py-10 lg:flex-row lg:px-12 lg:py-20 xl:h-[calc(100vh-400px)] xl:min-h-[950px]">
      <div className="relative aspect-square min-w-[350px] md:min-w-[450px] xl:min-w-[500px] 2xl:min-w-[600px]">
        <Image
          alt="book"
          sizes="100vw"
          className="object-contain"
          fill
          src="/starving-artist-render.webp"
        />
      </div>

      <div className="flex-col-center max-w-3xl gap-y-8 text-center font-interstate text-xl lg:items-start lg:text-left">
        <div className="flex flex-col gap-2">
          <h2>
            “Mark Jones has written a classic. Accessible and erudite, laden
            with facts about the economic impact generated by ‘creative
            clusters’ and peppered with insights from diverse creators, this
            book shatters, once and for all, the myth of the starving artist.”
          </h2>
          <h3 className="font-interstate-bold">
            — Ana Serrano, President and Vice-Chancellor, OCAD University
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          <p>
            In The Starving Artist Myth, Mark J. Jones addresses the doubt about
            opportunities in the creative economy by getting at the roots of the
            stereotype and answering the what, the why, and the how of achieving
            career goals. Featuring interviews of artists across the spectrum of
            creative fields and a practical career guide, The Starving Artist
            Myth lays out a manual for creative career success in a
            post-pandemic world.
          </p>
          <p className="font-interstate-bold">
            Mark J. Jones is the Dean of The Faculty of Animation, Arts, and
            Design at Sheridan College.
          </p>
          <p className="mt-3 font-interstate-black text-4xl uppercase tracking-widest">
            Available August 20, 2024
          </p>
        </div>

        <Button
          href="https://linktr.ee/starvingartistmyth"
          label="Pre-order here"
        />

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

function Subscribe() {
  return (
    <div className="bottom-0 bg-black p-10 text-white lg:sticky">
      <div className="flex flex-col gap-y-6 text-center">
        <p className="-mb-3 font-garamond text-2xl">
          Subscribe to the Starving Artist Myth Newsletter and receive a free
          excerpt.
        </p>
        <p className="text-md font-garamond">
          Plus, get a discount code worth 10% off purchase of the book from the
          Dundurn Press Online Store{" "}
          <span className="font-garamond text-xs">(conditions apply)</span>
        </p>

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
