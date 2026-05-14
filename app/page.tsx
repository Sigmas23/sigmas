'use client'
import { useState } from 'react';
import Logo from './components/Logo/Logo';
import Loading from './components/Loading/Loading';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <Loading onComplete={() => setIsLoading(false)} />
      )}
      
      <main className={`main-content ${!isLoading ? 'content-visible' : ''}`}>
        <header className="header">
          <div className="container">
            <nav className="nav">
              <Logo />
              

            </nav>
          </div>
        </header>
        
        <section className="section hero">
          <div className="container">
            <h1>hello</h1>
          </div>
        </section>
      </main>
    </>
  );
}