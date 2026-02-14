import "../../css/contact-section.css"
import PageTitle from "../../UI/PageTitle"
import SectionDesc from "../../UI/SectionDesc"
import ContactForm from "./ContactForm"
export default function ContactSection() {
    return (
        <>
            <section className="contact-section" id="contact-me">
                <div className="container">
                    <div className="contact-content">
                        <div className="contact-title">
                            <PageTitle title="Contact me" />
                            <SectionDesc desc="Cultivating Connections: Reach Out and Connect with Me" />

                        </div>
                        <div className="contact-section-bottom">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
