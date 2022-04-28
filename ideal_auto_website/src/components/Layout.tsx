import Head from "next/head";

export default function Layout({
  children,
  title = "Idea Auto",
}: {
  children: JSX.Element;
  title: string;
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </div>
  );
}
