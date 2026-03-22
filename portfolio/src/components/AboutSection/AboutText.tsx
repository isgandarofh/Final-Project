import { useTranslation } from "react-i18next"
import downloadIcon from "/img/download-icon.svg"

export default function AboutText() {
    const {t} = useTranslation()
    return (
        <div className="about-center-text">
            <p>
                {t("about-section-text")}
            </p>
            <a href="/data/Aga-İsgenderov-Cv-(Front end).pdf" target="_blank">
                <img src={downloadIcon} alt="" />
                Download CV
            </a>
        </div>
    )
}
