import linkedinLogo from "/img/linkedin-logo.svg"
import gitLogo from "/img/github.png"
import instaLogo from "/img/insta-logo.svg"
import "../css/social-media.css"



export default function SocialMedia() {
    return (
        <div className="social-media">
            <div className="social-media-box">
                <a target="_blank" href="https://www.instagram.com/isgandarofh">
                    <img src={instaLogo} alt="" />
                </a>
            </div>
            <div className="social-media-box">
                <a target="_blank" href="https://www.linkedin.com/in/ağa-isgəndərov-5bb877344">
                    <img src={linkedinLogo} alt="" />
                </a>

            </div>
            <div className="social-media-box">
                <a target="_blank" href="https://github.com/isgandarofh">
                    <img width={23}  src={gitLogo} alt="" />
                </a>
            </div>
        </div>
    )
}
