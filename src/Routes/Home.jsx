import Aboutsection from "../components/Aboutsection";
import Features from "../components/Features-section";
import Herosection from "../components/Hero-section";
import Howitworks from "../components/Howitworks-section";
import Stories from "../components/Stories-section";
import Truth from "../components/Truth-section";
import Footer from "../components/Footer";

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
