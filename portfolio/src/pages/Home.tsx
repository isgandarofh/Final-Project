import { useTranslation } from "react-i18next";
import FirstSection from "../components/FirstSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";

export default function Home() {

  const {t} = useTranslation()

  return (
    <>
      <FirstSection/>
      <ServicesSection/>
    </>
  )
}
