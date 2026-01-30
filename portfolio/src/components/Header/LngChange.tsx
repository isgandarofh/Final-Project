
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

export default function LngChange() {

    const locales = ['az', 'en', 'ru']

    const {i18n} = useTranslation()

    const changeLanguage = (value:string)=>{
            Cookies.set("language", `${value}`);
            i18n.changeLanguage(value) 
    }
    return (
        <select className="lng-change" onChange={(e)=>{changeLanguage(e.target.value)}} defaultValue={i18n.language} name="" id="">
            {
                locales.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))
            }
        </select>
    )
}
