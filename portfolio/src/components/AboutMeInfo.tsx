import { useTranslation } from "react-i18next"
import downloadIcon from "../assets/img/download-icon.svg"

import profilePhoto from "../assets/img/Man in black suit looking confident (1).png"

import "../css/about-me-info.css"

export default function AboutMeInfo() {
  const { t } = useTranslation()
  return (
    <>
      <div className="about-me-info">

        <img
          width="400px"
          src={profilePhoto}
          alt=""
        />
        <div className="about-me-info-text">
          <h2>{t("About me")}</h2>
          <h4>FRONT END DEVELOPER</h4>
          <p>{t("about-me-info-paragraph")}</p>
          
          <a href="/data/test.pdf" target="_blank">
            <img src={downloadIcon} alt="" />
            Download CV
          </a>


        </div>
      </div>
    </>

  )
}
