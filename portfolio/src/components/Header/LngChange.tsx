
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

export default function LngChange() {

    // const cokkiesGetLng = Cookies.get("language")

    const locales = ['az', 'en', 'ru']

    const {i18n} = useTranslation()

    const changeLanguage = (e:any)=>{
            Cookies.set("language", `${e.target.value}`);
            i18n.changeLanguage(e.target.value) 
    }
    return (
        <select onChange={(e)=>{changeLanguage(e)}} name="" id="">
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
