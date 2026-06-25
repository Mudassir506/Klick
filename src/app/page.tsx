import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Sports from "./components/Sports";
import Marquee from "./components/Marquee";
import HowItWorks from "./components/HowItWorks";
import DreamSquad from "./components/DreamSquad";
// import MoreThanStats from "./components/MoreThanStats"; // Leaderboard hidden for initial launch
import Download from "./components/Waitlist";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Sports />
        <Marquee />
        <HowItWorks />
        <DreamSquad />
        {/* Leaderboard hidden for initial launch — may add back later. */}
        {/* <MoreThanStats /> */}
        <Download />
      </main>
      <Footer />
    </>
  );
}
