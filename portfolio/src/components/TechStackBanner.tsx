import "../css/techstack-banner.css"
import figmaLogo from "/img/icons8-figma-48.png"
import bootstrapLogo from "/img/icons8-bootstrap-48.png"
import reactLogo from "/img/icons8-react-48.png"
import typeScriptLogo from "/img/icons8-typescript-48.png"
import npmLogo from "/img/icons8-npm-48.png"
export default function TechStackBanner() {
    const techStack = [
        { logo: figmaLogo },
        { logo: bootstrapLogo },
        { logo: reactLogo },
        { logo: typeScriptLogo },
        { logo: npmLogo },
    ];
    return (
        <>
            <section className="techstack-banner">
                <div className="techstack-track">
                    {Array(5).fill(techStack).flat().map((tech, index) => (
                        <div key={index} className="tech-card">
                            <img src={tech.logo} alt="logo" />
                        </div>
                    ))}

                       {Array(5).fill(techStack).flat().map((tech, index) => (
                        <div key={index} className="tech-card">
                            <img src={tech.logo} alt="logo" />
                        </div>
                    ))}

                       {Array(5).fill(techStack).flat().map((tech, index) => (
                        <div key={index} className="tech-card">
                            <img src={tech.logo} alt="logo" />
                        </div>
                    ))}
                </div>

            </section>


        </>
    )
}
