import Banner from "../components/ServicesBanner";
import ServicesInfo from "../components/ServicesInfo";
import ServicesCards from "../components/ServicesSection/ServicesCards";
import TechStackBanner from "../components/TechStackBanner";

export default function Services() {
  return (
    <>
      <Banner />
      <div className="container">
        <ServicesCards />
      </div>
      <TechStackBanner/>
      <div className="container">
      <ServicesInfo/>
      </div>
    </>
  )
}
