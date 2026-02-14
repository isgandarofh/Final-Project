import "../../css/header.css"
import menuIcon from "../../assets/img/icons8-menu-50 (2).png"
import { useEffect, useRef, useState } from "react"
import { Link, NavLink } from "react-router-dom"
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
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                } to="/" end>{t("Home")}</NavLink></li>

                                <li><NavLink className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                } to="/services">{t("Services")}</NavLink></li>

                                <li><NavLink className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                } to="/about-me">{t("About me")}</NavLink></li>

                                <li><a href="/#portfolio">{t("Portfolio")}</a></li>
                                <li><a href="/#contact-me">{t("Contact me")}</a></li>
                            </ul>
                        </div>
                        <div className="only-desktop">
                            <LngChange />
                        </div>
                        <div className="header-button">
                            <HireMeButton />
                        </div>
                        <div className="right-action">
                            <div className="only-mobile">
                                <LngChange />
                            </div>
                            <div className="header-menu-icon"
                                onClick={() => setOpen(!open)}>
                                <img src={menuIcon} alt="" />
                            </div>
                        </div>

                        <div onClick={() => setOpen(false)} className={`dropdown-menu-overlay ${open ? 'open' : ''}`}></div>
                        <AnimatePresence>
                            {open && <motion.div key="box"
                                initial={{ opacity: 0, y: '-20px' }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: '-20px' }}
                                className="dropdown-menu">
                                <ul>
                                    <ul>
                                        <li><Link to="/">{t("Home")}</Link></li>
                                        <li><Link to="/services">{t("Services")}</Link></li>
                                        <li><Link to="/about-me">{t("About me")}</Link></li>
                                        <li><Link to="portfolio">{t("Portfolio")}</Link></li>
                                        <li><Link to="contact-me">{t("Contact me")}</Link></li>
                                    </ul>
                                </ul>
                            </motion.div>}
                        </AnimatePresence>


                    </div>
                </div>
            </header>
        </>
    )
}
