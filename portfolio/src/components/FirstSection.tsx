import "../css/first-section.css"
import headerTextBg from  "../assets/img/first-section-org-bg.svg"
import instaLogo from "../assets/img/insta-logo.svg"
import linkedinLogo from "../assets/img/linkedin-logo.svg"
import brauzerLogo from "../assets/img/brauzer-logo.svg"
import behanceLogo from "../assets/img/behance-logo.svg"
import profilePhoto from "../assets/img/Man in black suit looking confident.png"

export default function FirstSection() {
    return (
        <>
            <section className="first-section">
                <div className="container">
                    <div className="first-section-content">
                        <div className="first-section-text">
                            <p>Hi I am</p>
                            <h3>Aga Isgenderov</h3>
                            <img id="first-section-org-bg" src={headerTextBg} alt="" />
                            <h1>FRONT END <br />Developer</h1>
                            <div className="social-media">
                                <div className="social-media-box">
                                    <img src={instaLogo} alt="" />
                                </div>
                                <div className="social-media-box">
                                    <img src={linkedinLogo} alt="" />
                                </div>
                                <div className="social-media-box">
                                    <img src={brauzerLogo} alt="" />
                                </div>
                                <div className="social-media-box">
                                    <img src={behanceLogo} alt="" />
                                </div>
                            </div>
                            <div className="first-section-buttons">
                                <button>Hire Me</button>
                                <button>Downlead CV</button>
                            </div>
                            <div className="first-section-job-info">
                                <div className="first-section-job-info-box">
                                    <h3>5+</h3>
                                    <h4>Experiences</h4>
                                </div>
                                <div className="first-section-job-info-box">
                                    <h3>20+</h3>
                                    <h4>Project done</h4>
                                </div>
                                <div className="first-section-job-info-box">
                                    <h3>80+</h3>
                                    <h4>Happy Clients</h4>
                                </div>
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
                </div>
            </section>
        </>
    )
}
