import { Link } from "react-router-dom";
import FooterContact from "./FooterContact";
import "../../css/footer.css"
import SocialMedia from "../SocialMedia";
import { useTranslation } from "react-i18next";


export default function Footer() {

        const { t } = useTranslation()
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h2>LOGO</h2>
                    </div>
                    <div className="footer-header">
                        <ul>
                                        <li><Link to="/">{t("Home")}</Link></li>
                                        <li><Link to="/services">{t("Services")}</Link></li>
                                        <li><Link to="/about-me">{t("About me")}</Link></li>
                                        <li><Link to="portfolio">{t("Portfolio")}</Link></li>
                                        <li><Link to="contact-me">{t("Contact me")}</Link></li>
                                    </ul>
                    </div>
                    <SocialMedia />
                    <FooterContact />
                    <div className="footer-finish-text">
                        Made by @isgandarofh Front End Developer
                    </div>
                </div>
            </div>
        </footer>
    )
}
