import ServicesBanner from "../components/ServicesBanner";
import ServicesInfo from "../components/ServicesInfo";
import ServicesCards from "../components/ServicesSection/ServicesCards";
import TechStackBanner from "../components/TechStackBanner";

export default function Services() {
  return (
    <>
      <ServicesBanner/>
      <div className="container">
        <ServicesInfo />

      </div>
      <TechStackBanner />
      <div className="container">
        <ServicesCards />

      </div>
    </>
  )
}
