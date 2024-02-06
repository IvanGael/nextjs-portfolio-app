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

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Features />
      <Formation/>
      <ProfExperiences/>
      {/* <Pricing /> */}
      <Faq />
      <Contact />
      <Customers />
    </Layout>
  );
}
