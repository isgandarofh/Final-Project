import { useTranslation } from "react-i18next"
import "../../css/services-section.css"
import PageTitle from "../../UI/PageTitle"
import SectionDesc from "../../UI/SectionDesc"
import ServicesCards from "./ServicesCards"
export default function ServicesSection() {

  const { t } = useTranslation()
  return (
    <>
      <section className="services-section">
        <div className="container">
          <div className="services-content">
            <PageTitle title= {t("Services")} />
            <SectionDesc desc={t("services-desc")}/>
            <ServicesCards />
          </div>
        </div>
      </section>
    </>
  )
}
