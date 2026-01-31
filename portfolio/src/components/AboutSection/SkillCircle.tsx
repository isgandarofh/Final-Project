import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import figmaLogo from "../../assets/img/Vector (9).png"
import reactLogo  from "../..//assets/img/atom (1).png"
import tsLogo from "../../assets/img/typescript.png"
import jsLogo from "../../assets/img/js.png"
import githubLogo from "../..//assets/img/github.png"


export default function SkillCircle() {
    const skills = [
        {
            name: "Figma",
            percentage: 100,
            icon: figmaLogo,
            iconSize: 40,
        },
        {
            name: "React",
            percentage: 90,
            icon: reactLogo ,
            iconSize: 60,
        },
        {
            name: "TypeScript",
            percentage: 90,
            icon: tsLogo,
            iconSize : 50
        },
        {
            name: "JavaScript",
            percentage: 85,
            icon: jsLogo,
            iconSize : 50
        },
        {
            name: "GitHub",
            percentage: 80,
            icon: githubLogo,
            iconSize : 60

        },
    ];
    return (
        <>
            <div className="about-statistic">
                {skills.map((skill, index) => (
                    <div className="about-statistic-card" key={index}>
                        <div className="skill-circle">
                            <CircularProgressbar
                                value={skill.percentage}
                                styles={buildStyles({
                                    pathColor: "#fd6f00",
                                    trailColor: "#1F1F1F" ,
                                })}
                            />
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                style={{ width: skill.iconSize }}
                                className="skill-icon"
                            />
                        </div>
                        <h4>{skill.percentage}%</h4>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </>
    )
}
