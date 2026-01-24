import "../../css/header.css"
import menuIcon from "../../assets/img/icons8-menu-50 (2).png"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Header() {

    const [open, setOpen] = useState(false)

    return (
        <>
            <header>
                <div className="container">
                    <div className="header-content">
                        <div className="header-logo">
                            <h2>LOGO</h2>
                        </div>
                        <div className="header-menu">
                            <ul>
                                <li><Link className="header-menu-active" to="/">Home</Link></li>
                                <li><Link to="">Services</Link></li>
                                <li><Link to="">About me</Link></li>
                                <li><Link to="">Portfolio</Link></li>
                                <li><Link to="">Contact me</Link></li>
                            </ul>
                        </div>
                        <div className="header-button">
                            <button>Hire me</button>
                        </div>
                        <div className="header-menu-icon"
                            onClick={() => setOpen(!open)}>
                            <img src={menuIcon} alt="" />
                        </div>
                        {open && <div onClick={() => setOpen(false)} className="dropdown-menu-overlay"></div>}
                        {open && (
                            <div className="dropdown-menu">
                                <ul>
                                    <li><Link to="">Services</Link></li>
                                    <li><Link to="">About me</Link></li>
                                    <li><Link to="">Portfolio</Link></li>
                                    <li><Link to="">Contact me</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </>
    )
}
