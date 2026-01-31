import "../../css/about-me-section.css"
import PageTitle from "../../UI/PageTitle"
import SectionDesc from "../../UI/SectionDesc"
import profilePhoto from "../../assets/img/Man in black suit looking confident (1).png"
import AboutText from "./AboutText"
import 'react-circular-progressbar/dist/styles.css';
import SkillCircle from "./SkillCircle"



export default function AboutMeSection() {


    return (
        <>
            <section className="about-section">
                <div className="container">
                    <div className="about-content">
                        <div className="about-title">
                            <PageTitle title="About me" />
                            <SectionDesc desc="User Interface and User Experience and Also video editing" />
                        </div>
                        <div className="about-center">
                            <div className="about-center-img">
                                <div className="about-center-img-bg">
                                    <img
                                        width="560px"
                                        src={profilePhoto}
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
