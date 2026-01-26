import { useTranslation } from "react-i18next"

export default function HireMeButton() {
  const {t} = useTranslation()
  return (
    <>
      <button>{t("Hire Me")}</button>
    </>
  )
}
