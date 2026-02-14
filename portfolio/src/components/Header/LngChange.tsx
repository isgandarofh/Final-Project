import { useTranslation } from "react-i18next";
import IconSvg from "../../UI/IconSvg";

export default function LngChange() {
    const locales = ['az', 'en', 'ru']
    const { i18n } = useTranslation()
    const changeLanguage = (value: string) => {
        i18n.changeLanguage(value)
    }
    return (
        <div className="lng-change-parent">
            <select className="lng-change" onChange={(e) => { changeLanguage(e.target.value) }} defaultValue={i18n.language} name="" id="">
                {
                    locales.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))
                }
            </select>
            <div className="select-icon">
                <IconSvg name="arrow" size={18} />
            </div>
        </div>
    )
}
