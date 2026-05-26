'use client'
import { useState } from 'react';
import Loading from './components/Loading/Loading';
import HeroMain from './components/Heros/HeroMain';
import SecondHero from './components/Heros/HeroSecond';
import Nav from './components/Nav/Nav';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import FloatingContact from './components/Footer/FloatingContact';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  if(isLoading) {
      return <Loading onComplete={() => setIsLoading(false)} />
  }

  return (
      <div id='head' className={`main-content ${!isLoading ? 'content-visible' : ''}`} style={{ paddingTop: 'env(safe-area-inset-top)' }} >
          <div className="container">
              <Nav />
              <HeroMain />
              <SecondHero />
              <Services />
              <Footer />
              <FloatingContact />
          </div>
       </div>
  );
}