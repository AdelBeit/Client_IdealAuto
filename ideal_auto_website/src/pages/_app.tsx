import type { AppProps } from "next/app";
import "../index.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <Component {...pageProps} />
    </>
  );
}
