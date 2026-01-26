import "../../css/header.css"
import menuIcon from "../../assets/img/icons8-menu-50 (2).png"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import HireMeButton from "../../UI/HireMeButton"
import LngChange from "./LngChange"
import { useTranslation } from "react-i18next"

export default function Header() {
    const [open, setOpen] = useState(false);
    const headerRef = useRef<HTMLHeadingElement>(null);

    const { t } = useTranslation()

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                headerRef.current?.classList.add('sticky')
            } else {
                headerRef.current?.classList.remove('sticky')
            }
        })
    }, [])

    return (
        <>
            <header ref={headerRef}>
                <div className="container">
                    <div className="header-content">
                        <div className="header-logo">
                            <h2>LOGO</h2>
                        </div>
                        <div className="header-menu">
                            <ul>
                                <li><Link className="header-menu-active" to="/">{t("Home")}</Link></li>
                                <li><Link to="">{t("Services")}</Link></li>
                                <li><Link to="">{t("About me")}</Link></li>
                                <li><Link to="">{t("Portfolio")}</Link></li>
                                <li><Link to="">{t("Contact me")}</Link></li>
                                <LngChange />
                            </ul>
                        </div>
                        <div className="header-button">
                            <HireMeButton />
                        </div>
                        <div className="header-menu-icon"
                            onClick={() => setOpen(!open)}>
                            <img src={menuIcon} alt="" />
                        </div>
                        <div onClick={() => setOpen(false)} className={`dropdown-menu-overlay ${open ? 'open' : ''}`}></div>
                        <AnimatePresence>
                            {open && <motion.div key="box"
                                initial={{ opacity: 0, y: '-20px' }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: '-20px' }}
                                className="dropdown-menu">
                                <ul>
                                    <li><Link to="">Services</Link></li>
                                    <li><Link to="">About me</Link></li>
                                    <li><Link to="">Portfolio</Link></li>
                                    <li><Link to="">Contact me</Link></li>
                                </ul>
                            </motion.div>}
                        </AnimatePresence>


                    </div>
                </div>
            </header>
        </>
    )
}
