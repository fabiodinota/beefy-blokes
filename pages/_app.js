import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter mode="wait">
      <Component {...pageProps} key={router.pathname} />
    </AnimatePresence>
  );
}

export default MyApp;
