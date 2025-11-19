import { Navbar } from "./components/navbar"; 
import { Hero } from "./_components/Home/hero";
import { Advantage } from "./_components/Home/advantage";
import { Features } from "./_components/Home/features";
import { Team } from "./_components/Home/team";
import { Contact } from "./_components/Home/contact";
import { Footer } from "./components/footer"; 

export default function Home() {
  return (
    <div className="">
      <main>
        <Navbar />
        <Hero />
        <Advantage />
        <Features />
        <Team />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
