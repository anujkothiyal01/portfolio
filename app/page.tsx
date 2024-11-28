'use client'; // Client-side rendering for this component

import About from './components/About';
import Header from './components/Header';
import './globals.css'; // Import your global CSS

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header/>
      <About/>
    </main>

  );
}
