import { useTranslation } from "react-i18next";
import "../css/banner.css";

const ServicesBanner = () => {

  const {t} =useTranslation()
  return (
    <section className="services-banner">
      <h1>{t("Services")}</h1>
      <p>{t("Frontend solutions tailored to your needs")}</p>
    </section>
  );
};

export default ServicesBanner;
