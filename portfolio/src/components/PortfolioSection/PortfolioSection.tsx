import { useEffect, useState } from "react"
import "../../css/portfolio-section.css"
import PageTitle from "../../UI/PageTitle"
import PortfolioNavMenu from "./PortfolioNavMenu"
import PortfolioProjectsCard from "./PortfolioProjectsCard"
import { useSelector } from "react-redux"
export default function PortfolioSection() {

  const { portfolioContent, currentCategoryId } = useSelector((state: any) => state.portfolio);
  const [filterPortfolio, setFilterPortfolio] = useState(portfolioContent);


  useEffect(() => {
    if (currentCategoryId === 0) {
      setFilterPortfolio(portfolioContent);
    } else {
      const result = portfolioContent.filter((item: any) => item.categoryId === currentCategoryId);
      setFilterPortfolio(result);
    }
  }, [currentCategoryId, portfolioContent])



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

              {filterPortfolio && filterPortfolio.map((item: any) => (
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
