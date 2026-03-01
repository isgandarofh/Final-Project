import { Link } from "react-router-dom";
import FooterContact from "./FooterContact";
import "../../css/footer.css"
import SocialMedia from "../SocialMedia";
import { useTranslation } from "react-i18next";


export default function Footer() {

    const generateActiveClassWithHome = (search: string) => {

        switch (search) {
            case location.search:
                return 'nav-link';
            default:
                return ""
        }
    }

    const { t } = useTranslation()
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <ul>
                            <li>
                                <a href="/">isgandarofh</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-header">
                        <ul>
                            <li><Link to="/">{t("Home")}</Link></li>
                            <li><Link to="/services">{t("Services")}</Link></li>
                            <li><Link to="/about-me">{t("About me")}</Link></li>
                            <li>
                                <Link className={generateActiveClassWithHome('?portfolio=true')} to={'/?portfolio=true'}>
                                    {t("Portfolio")}
                                </Link>
                            </li>
                            <li>
                                <Link className={generateActiveClassWithHome('?contact=true')} to={'/?contact=true'}>
                                    {t("Contact me")}
                                </Link>
                            </li>
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
