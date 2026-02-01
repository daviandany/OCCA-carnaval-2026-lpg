import React from "react";

import Navbar from "../shared/components/Navbar";
import Footer from "../shared/components/Footer";

import Hero from "../modules/home/components/Hero";
import CarnivalBanner from "../modules/home/components/CarnivalBanner";
import RoomsSection from "../modules/home/components/RoomsSection";
import { Services } from "../modules/home/components/services";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-occaYellow selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <CarnivalBanner />
        <RoomsSection />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default App;
