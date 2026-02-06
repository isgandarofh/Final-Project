import "../css/services-info.css"
import servicesInfoPhoto from "../assets/img/frontendphoto.png"
import { useTranslation } from "react-i18next"
export default function ServicesInfo() {
  const {t} = useTranslation()
  return (
    <>
      <section className="services-info-section">
        <div className="services-info-left">
          <img src={servicesInfoPhoto} alt="Services Illustration" />
        </div>
        <div className="services-info-right">
          <h2>{t("About My Services")}</h2>
          <p>
            {
              t("services-info-desc")
            }
            
          </p>
          <ul>
            <li>{t("Frontend Development (React, TypeScript, Tailwind)")}</li>
            <li>{t("UI/UX Design (Figma, prototyping)")}</li>
            <li>{t("Responsive Web Design (Mobile & Desktop)")}</li>
            <li>{t("Code Optimization və Performance")}</li>
          </ul>
        </div>
      </section>

    </>
  )
}
