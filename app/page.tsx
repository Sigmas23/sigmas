'use client'
import { useState } from 'react';
import Loading from './components/Loading/Loading';
import HeroMain from './components/Heros/HeroMain';
import SecondHero from './components/Heros/HeroSecond';
import Nav from './components/Nav/Nav';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <Loading onComplete={() => setIsLoading(false)} />
      )}
      
      <main id='head' className={`main-content ${!isLoading ? 'content-visible' : ''}`}>
          <div className="container">
              <Nav />
              <HeroMain />
              <SecondHero />
          </div>

       </main>
    </>
  );
}