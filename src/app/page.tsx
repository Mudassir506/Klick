import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Marquee from "./components/Marquee";
import HowItWorks from "./components/HowItWorks";
import Waitlist from "./components/Waitlist";
import MoreThanStats from "./components/MoreThanStats";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Marquee />
        <HowItWorks />
        <Waitlist />
        <MoreThanStats />
      </main>
      <Footer />
    </>
  );
}
