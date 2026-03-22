import "../css/services-banner.css";
import servicesBanner from "/img/services-banner.svg"

const ServicesBanner = () => {

  return (
    <section className="services-banner">
      <img src={servicesBanner} alt="" />
    </section>
  );
};

export default ServicesBanner;
