import "../../css/portfolio-section.css"
import PageTitle from "../../UI/PageTitle"
import PortfolioNavMenu from "./PortfolioNavMenu"
import PortfolioProjectsCard from "./PortfolioProjectsCard"
import { useSelector } from "react-redux"
export default function PortfolioSection() {

  const portfolioContent = useSelector((state: any) => state.portfolio.portfolioContent);
  
  return (
    <>
      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-content">
            <PageTitle title="Portfolio" />
            <div className="portfolio-header">
              <PortfolioNavMenu />
            </div>
            <div className="portfolio-project-images">

              {portfolioContent && portfolioContent.map((item: any) => (
                <PortfolioProjectsCard key={item.id} image={item.image} name={item.title} categories={item.categoryTitle}
                 />
              ))
              }
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
