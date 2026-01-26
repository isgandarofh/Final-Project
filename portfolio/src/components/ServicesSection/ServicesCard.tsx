import servicesCardIcon from "../../assets/img/services-cards-icon.svg"

type ServicesCardType = {
    title : string,
    desc : string
}


export default function ServicesCard({title,desc}: ServicesCardType) {
    return (
        <>
            <div className="services-card">
                <img src={servicesCardIcon} alt="" />
                <span>{title}</span>
                <p>
                    {desc}
                </p>
            </div>
        </>
    )
}
