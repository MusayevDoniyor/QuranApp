import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import SurahSection from "@/components/SurahSection/SurahSection";
import Modal from "../components/Modal/Modal";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen mt-24">
        <HeroSection />
        <SurahSection />
      </main>
    </>
  );
}
