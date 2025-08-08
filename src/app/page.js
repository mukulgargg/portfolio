import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ExperienceSection from "./components/Experience";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col bg-[#121212]">
    <main className="flex min-h-screen flex-col bg-transparent">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
