import { useEffect } from "react";
import Contact from "../components/Contact";
import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import Pricing from "../components/Pricing";
import { Features } from "../components/Features";
import { Services } from "../components/Services";
import Faq from "../components/Faq";
import Customers from "../components/Customers";
import ProfExperiences from '../components/profExperiences';
import Formation from '../components/Formation';

import { useTheme } from 'next-themes';

export default function Home() {
  const { setTheme } = useTheme();
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  return (
    <Layout>
      <Hero />
      <Customers />
      {/* <Services /> */}
      <Features />
      {/* <Formation />
      <ProfExperiences /> */}
      {/* <Pricing /> */}
      {/* <Faq /> */}
      <Contact />
    </Layout>
  );
}
