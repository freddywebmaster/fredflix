import GlobalState from "../context/GlobalState";
import NextProgress from "next-progress";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalState>
      <NextProgress color="#E50914" options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </GlobalState>
  );
}

export default MyApp;
