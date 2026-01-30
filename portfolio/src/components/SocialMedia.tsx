import instaLogo from "../assets/img/insta-logo.svg"
import linkedinLogo from "../assets/img/linkedin-logo.svg"
import brauzerLogo from "../assets/img/brauzer-logo.svg"
import behanceLogo from "../assets/img/behance-logo.svg"


export default function SocialMedia() {
    return (
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
    )
}
