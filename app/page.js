import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Skills from "./components/SkillSection";
import Experience from "./components/experienceSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-luxury-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-luxury-bronze/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-luxury-platinum/3 rounded-full blur-2xl"></div>
      </div>
      
      <Navbar />
      <div className="container relative z-10 mt-24 mx-auto px-6 lg:px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <Experience />
        <ProjectsSection />
        <Skills />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
