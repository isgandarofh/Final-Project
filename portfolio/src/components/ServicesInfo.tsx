import "../css/services-info.css"
import servicesInfoPhoto from "../assets/img/frontendphoto.png"
export default function ServicesInfo() {
  return (
    <>
      <section className="services-info-section">
        <div className="services-info-left">
          <img src={servicesInfoPhoto} alt="Services Illustration" />
        </div>
        <div className="services-info-right">
          <h2>About My Services</h2>
          <p>
            I provide high-quality frontend solutions for modern web interfaces 
      and user experiences. Every project focuses on responsive design, 
      performance, and clean, maintainable code.
          </p>
          <ul>
            <li>Frontend Development (React, TypeScript, Tailwind)</li>
            <li>UI/UX Design (Figma, prototyping)</li>
            <li>Responsive Web Design (Mobile & Desktop)</li>
            <li>Code Optimization və Performance</li>
          </ul>
        </div>
      </section>

    </>
  )
}
