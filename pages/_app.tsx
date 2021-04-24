import "../styles/globals.css";

declare global {
  interface Window {
    mainMusic: HTMLAudioElement;
  }
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
