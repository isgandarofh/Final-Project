
import { useEffect, useRef } from "react";
import AboutMeSection from "../components/AboutSection/AboutMeSection";
import ContactSection from "../components/ContactSection/ContactSection";
import FirstSection from "../components/FirstSection";
import PortfolioSection from "../components/PortfolioSection/PortfolioSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import { useSearchParams } from 'react-router-dom'
import { getPortfolioCategory, getPortfolioContent } from "../services/api";
import { useDispatch } from "react-redux";
import { setPortfolioCategory, setPortfolioContent } from "../store/slices/portfolioSlice";

export default function Home() {
  const params = useSearchParams();
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const isPortfolio = params[0].get('portfolio');
    const isContact = params[0].get('contact');

    if (isContact) {
      if (contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    if (isPortfolio) {
      if (portfolioRef.current) {
        portfolioRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [params])




  useEffect(() => {
    async function getData() {
      const result = await getPortfolioCategory();
      dispatch(setPortfolioCategory(result));
    }
    getData();
  }, [])

  useEffect(() => {
    async function getPortfolioData(){
      const resultContent = await getPortfolioContent()
      dispatch(setPortfolioContent(resultContent))
      console.log(resultContent);
    }
    getPortfolioData()
  }, [])


  return (
    <>
      <FirstSection />
      <ServicesSection />
      <AboutMeSection />
      <div ref={portfolioRef}>
        <PortfolioSection />
      </div>
      <div ref={contactRef}>
        <ContactSection />
      </div>
    </>
  )
}
