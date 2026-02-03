import "../css/first-section.css"
import headerTextBg from "../assets/img/first-section-org-bg.svg"
import profilePhoto from "../assets/img/Man in black suit looking confident.png"
import HireMeButton from "../UI/HireMeButton"
import { useTranslation } from "react-i18next"
import SocialMedia from "./SocialMedia"

export default function FirstSection() {

    const { t } = useTranslation()
    return (
        <>
            <section className="first-section">
                <div className="container">
                    <div className="first-section-content">
                        <div className="first-section-text">
                            <p>{t('Hi I am')}</p>
                            <h3>Aga Isgenderov</h3>
                            <img id="first-section-org-bg" src={headerTextBg} alt="" />
                            <h1>FRONT END <br />Developer</h1>
                            <SocialMedia />
                            <div className="first-section-buttons">
                                <HireMeButton />
                                <button>{t('download cv')}</button>
                            </div>
                        </div>
                        <div className="first-section-img">
                            <div className="first-section-grey-bg"></div>
                            <img
                                width="500px"
                                src={profilePhoto}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="first-section-job-info">
                        <div className="first-section-job-info-box">
                            <h3>5+</h3>
                            <h4>{t("Experiences")}</h4>
                        </div>
                        <div className="first-section-job-info-box">
                            <h3>20+</h3>
                            <h4>{t("Project done")}</h4>
                        </div>
                        <div className="first-section-job-info-box">
                            <h3>80+</h3>
                            <h4>{t("Happy Clients")}</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
