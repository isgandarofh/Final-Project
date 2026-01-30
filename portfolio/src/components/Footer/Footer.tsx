import { Link } from "react-router-dom";
import FooterContact from "./FooterContact";
import "../../css/footer.css"
import SocialMedia from "../SocialMedia";


export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h2>LOGO</h2>
                    </div>
                    <div className="footer-header">
                        <ul>
                            <li><Link to="">Home</Link></li>
                            <li><Link to="">Services</Link></li>
                            <li><Link to="">About me</Link></li>
                            <li><Link to="">Portfolio</Link></li>
                            <li><Link to="">Contact me</Link></li>
                        </ul>
                    </div>
                    <SocialMedia/>
                    <FooterContact />
                    <div className="footer-finish-text">
                        Made by @isgandarofh Front End Developer
                    </div>
                </div>
            </div>
        </footer>
    )
}
