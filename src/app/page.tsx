import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Catering from '@/components/Catering';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Divider from '@/components/Divider';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        {/* Dark → Cream */}
        <Divider from="#2B161B" to="#FFF8E7" />
        <Menu />
        {/* Cream → Dark */}
        <Divider from="#FFF8E7" to="#2B161B" flip />
        <Catering />
        {/* Dark → White */}
        <Divider from="#2B161B" to="#ffffff" />
        <Testimonials />
        {/* White → Cream */}
        <Divider from="#ffffff" to="#FFF8E7" flip />
        <Contact />
      </main>
      {/* Cream → Dark footer */}
      <Divider from="#FFF8E7" to="#2B161B" />
      <Footer />
    </>
  );
}
