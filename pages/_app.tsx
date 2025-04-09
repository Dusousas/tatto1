import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header"; // Certifique-se de que o caminho está correto
import Footer from "@/components/Footer"; // Certifique-se de que o caminho está correto

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}