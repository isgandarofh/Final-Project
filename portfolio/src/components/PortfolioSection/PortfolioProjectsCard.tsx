type Props = {
  image: string,
  name: string,
  categories: string,
}

export default function PortfolioProjectsCard({ image, name, categories }: Props) {



  return (
    <>
      <div className="portfolio-project-images-content">
        <div className="portfolio-project-images-img">
          <img src={image} alt="" />
        </div>
        <div className="portfolio-project-images-text">
          <div className="project-name">{name}</div>
          <div className="project-categories">{categories}</div>
        </div>
      </div>
    </>
  )
}
