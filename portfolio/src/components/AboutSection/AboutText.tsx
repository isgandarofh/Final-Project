import downloadIcon from "../../assets/img/download-icon.svg"

export default function AboutText() {
    return (
        <div className="about-center-text">
            <p>
                A software engineer, the modern-day architect of digital realms,
                headerigates the ethereal landscapes of code, sculpting intangible
                structures that shape our technological world. With fingers
                poised over keyboards like virtuoso pianists, they compose
                symphonies of logic, their minds a labyrinth of algorithms and
                solutions.Their canvas is a screen, a vast expanse where lines
                of code dance in intricate patterns, weaving the fabric of
                programs and applications. Each keystroke is a brushstroke,
                crafting intricate architectures and breathing life into
                innovative designs.In this digital atelier, they don the mantle
                of problem solvers, confronting bugs and glitches like valiant
                knights in an ever-evolving quest for perfection. Debugging
                becomes a noble pursuit, unraveling the mysteries hidden within
                the tangled webs of code. designs.In this digital atelier.
            </p>
            <button>
                <img src={downloadIcon} alt="" />
                Download CV
            </button>
        </div>
    )
}
