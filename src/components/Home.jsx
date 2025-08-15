import Aboutsection from "./Aboutsection";
import Features from "./Features-section";
import Herosection from "./Hero-section";
import Howitworks from "./Howitworks-section";
import Stories from "./Stories-section";
import Truth from "./Truth-section";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Herosection />
      <Aboutsection />
      <Howitworks />
      <Features />
      <Stories />
      <Truth />
      <Footer />
    </>
  );
}
