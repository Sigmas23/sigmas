'use client'
import { useState } from 'react';
import Loading from './components/Loading/Loading';
import HeroMain from './components/Heros/HeroMain';
import SecondHero from './components/Heros/HeroSecond';
import Nav from './components/Nav/Nav';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  if(isLoading) {
        <Loading onComplete={() => setIsLoading(false)} />
  }

  return (
      <div id='head' className={`main-content ${!isLoading ? 'content-visible' : ''}`}>
          <div className="container">
              <Nav />
              <HeroMain />
              <SecondHero />
              <Services />
              <Footer />
          </div>
       </div>
  );
}