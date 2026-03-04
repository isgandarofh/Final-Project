import { useTranslation } from "react-i18next"
import "../css/about-me-info.css"
import AboutText from "./AboutSection/AboutText"
import SkillCircle from "./AboutSection/SkillCircle"
import PageTitle from "../UI/PageTitle"
import SectionDesc from "../UI/SectionDesc"
import myProfilePhoto from "../assets/img/2cae98a3-b2d2-4f5c-aa47-4d0773dd853b_removalai_preview.png"


export default function AboutMeInfo() {
  const { t } = useTranslation()

  return (
    <div className="about-page-content">
      <PageTitle title={t("About me")} />
      <SectionDesc desc="User Interface and User Experience and Also video editing" />
      <div className="about-center">
        <div className="about-center-img">
          <div className="about-center-img-bg">
            <img
              width="560px"
              src={myProfilePhoto}
              alt=""
            />
          </div>
        </div>
        <AboutText />
      </div>
      <SkillCircle />

    </div>

  )
}
