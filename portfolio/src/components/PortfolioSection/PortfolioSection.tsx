import "../../css/portfolio-section.css"
import PageTitle from "../../UI/PageTitle"
import PortfolioNavMenu from "./PortfolioNavMenu"
import portfolioProjectsImg1 from "../../assets/img/Rectangle 21 (1).png"
import portfolioProjectsImg2 from "../../assets/img/Rectangle 26.png"
import portfolioProjectsImg3 from "../../assets/img/Rectangle 22.png"
export default function PortfolioSection() {
  return (
    <>
        <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="portfolio-content">
          <PageTitle title="Portfolio"/>
          <div className="portfolio-header">
            <PortfolioNavMenu/>
          </div>
          <div className="portfolio-project-images">

            <div className="portfolio-project-images-content">
              <div className="portfolio-project-images-img">
                <img src={portfolioProjectsImg1} alt="" />
              </div>
              <div className="portfolio-project-images-text">
                <div className="project-name">Name projects</div>
                <div className="project-categories">Categories</div>
              </div>
            </div>
            <div className="portfolio-project-images-content">
              <div className="portfolio-project-images-img">
                <img src={portfolioProjectsImg2} alt="" />
              </div>
              <div className="portfolio-project-images-text">
                <div className="project-name">Name projects</div>
                <div className="project-categories">Categories</div>
              </div>
            </div>
            <div className="portfolio-project-images-content">
              <div className="portfolio-project-images-img">
                <img src={portfolioProjectsImg3} alt="" />
              </div>
              <div className="portfolio-project-images-text">
                <div className="project-name">Name projects</div>
                <div className="project-categories">Categories</div>
              </div>
            </div>
            <div className="portfolio-project-images-content">
              <div className="portfolio-project-images-img">
                <img src={portfolioProjectsImg2} alt="" />
              </div>
              <div className="portfolio-project-images-text">
                <div className="project-name">Name projects</div>
                <div className="project-categories">Categories</div>
              </div>
            </div>
            <div className="portfolio-project-images-content">
              <div className="portfolio-project-images-img">
                <img src={portfolioProjectsImg3} alt="" />
              </div>
              <div className="portfolio-project-images-text">
                <div className="project-name">Name projects</div>
                <div className="project-categories">Categories</div>
              </div>
            </div>
            <div className="portfolio-project-images-content">
              <div className="portfolio-project-images-img">
                <img src={portfolioProjectsImg1} alt="" />
              </div>
              <div className="portfolio-project-images-text">
                <div className="project-name">Name projects</div>
                <div className="project-categories">Categories</div>
              </div>
            </div>
            <div className="portfolio-project-images-content">
              <div className="portfolio-project-images-img">
                <img src={portfolioProjectsImg3} alt="" />
              </div>
              <div className="portfolio-project-images-text">
                <div className="project-name">Name projects</div>
                <div className="project-categories">Categories</div>
              </div>
            </div>
            <div className="portfolio-project-images-content">
              <div className="portfolio-project-images-img">
                <img src={portfolioProjectsImg1}alt="" />
              </div>
              <div className="portfolio-project-images-text">
                <div className="project-name">Name projects</div>
                <div className="project-categories">Categories</div>
              </div>
            </div>
            <div className="portfolio-project-images-content">
              <div className="portfolio-project-images-img">
                <img src={portfolioProjectsImg2} alt="" />
              </div>
              <div className="portfolio-project-images-text">
                <div className="project-name">Name projects</div>
                <div className="project-categories">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
