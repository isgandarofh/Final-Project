import { useSelector } from "react-redux";


export default function PortfolioNavMenu() {

    const portfolioCategory = useSelector((state : any)=> state.portfolio.categories)

    return (
        <>

            <div className="portfolio-header-box portfolio-header-box-active">All</div>

            {portfolioCategory?.map((item: any) => (
                <div
                    key={item.id}
                    className="portfolio-header-box"
                >
                    {item.title}
                </div>
            ))}
        </>
    )
}
