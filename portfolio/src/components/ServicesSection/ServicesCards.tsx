import { useSelector } from "react-redux";
import ServicesCard from "./ServicesCard";

export default function ServicesCards() {

  const servicesCardsContent = useSelector((state: any) => state.services.servicesContent)


  return (
    <div className="services-cards">
      {
        servicesCardsContent && servicesCardsContent.map((item: any) => (
          <ServicesCard
            key={item.id}
            title={item.title}
            desc={item.desc}
            icon={item.icon}
          />
        ))
      }
    </div>
  );
}
