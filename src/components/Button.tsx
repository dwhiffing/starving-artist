import Link from "next/link";

export const Button = (props: {
  className?: string;
  href: string;
  label: string;
}) => (
  <Link href={props.href} target="_blank">
    <button
      className={`bg-yellow px-6 py-3 text-black transition-colors hover:bg-red hover:text-white ${props.className ?? ""}`}
    >
      <span className="mt-[3px] block font-din text-2xl uppercase leading-none">
        {props.label}
      </span>
    </button>
  </Link>
);
