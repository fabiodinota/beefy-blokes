import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/globals.css";
import { Sniglet } from '@next/font/google';

const sniglet = Sniglet({
  weight: ['400', '800'],
  style: ['normal'],
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
      <>
        <style jsx global>{`
          * {
            font-family: ${sniglet.style.fontFamily};
          }
        `}
        </style>
        <AnimatePresence exitBeforeEnter mode="wait">
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </>
  );
}

export default MyApp;
