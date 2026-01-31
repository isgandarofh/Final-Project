import bannerImg from "../assets/img/top-view-desk-concept-with-orange-background.jpg"
import "../css/about-page.css"
import { useTranslation } from "react-i18next"

export default function AboutMeBanner() {
    const {t} = useTranslation()
    return (
        <>
            <section className="about-me-banner"
            style={{ backgroundImage: `url(${bannerImg})` }}>
                <h1>{t("About me")}</h1>
                <p> {t("about-desc")}</p>
            </section>
        </>
    )
}


