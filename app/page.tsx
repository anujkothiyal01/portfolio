'use client'; // Client-side rendering for this component

import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './globals.css'; // Import your global CSS

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
</main>

  );
}
