import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";
import ErrorBoundary from "../components/ErrorBoundary";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ErrorBoundary>
      <SessionProvider session={session}>
        <NextNProgress />
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </ErrorBoundary>
  );
}
