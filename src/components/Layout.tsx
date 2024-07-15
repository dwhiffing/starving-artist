import Head from "next/head";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { ReactNode } from "react";
import { IPageProps } from "@/utils";

interface ILayoutProps extends IPageProps {
  title?: string;
  children?: ReactNode;
}
export function Layout(props: ILayoutProps) {
  const title = props.title ?? "The Starving Artist Myth - By Mark J. Jones";

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="substackapi.com" />
        <link rel="preconnect" href="https://substackapi.com" />
        <meta property="og:type" content="book" />
        <meta property="og:title" content={title} />
        {/* TODO: change to production url */}
        <meta property="og:url" content="https://starving-artist.vercel.app/" />
        <meta
          property="og:image"
          content="https://starving-artist.vercel.app/social/og.jpg"
        />
        <meta
          property="og:description"
          content={props.meta.fields.description}
        />
        <meta property="book:isbn" content={props.meta.fields.isbn} />
        <meta property="book:author" content={props.meta.fields.author} />
        <meta
          property="book:release_date"
          content={props.meta.fields.release_date}
        />
      </Head>

      <main className="min-w-[375px] text-black">
        <NavBar />

        {props.children}

        <Footer footer={props.footer} />
      </main>
    </>
  );
}
