import "../../css/about-me-section.css"
import PageTitle from "../../UI/PageTitle"
import SectionDesc from "../../UI/SectionDesc"
import AboutText from "./AboutText"
import 'react-circular-progressbar/dist/styles.css';
import SkillCircle from "./SkillCircle"
import { useTranslation } from "react-i18next"
import myProfilePhoto from "../../assets/img/my-profile-photo.png"





export default function AboutMeSection() {

    const {t} = useTranslation()

    return (
        <>
            <section className="about-section">
                <div className="container">
                    <div className="about-content">
                        <div className="about-title">
                            <PageTitle title= {t("About me")} />
                            <SectionDesc desc={t("about-me-desc")} />
                        </div>
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
                </div>
            </section>
        </>
    )
}
