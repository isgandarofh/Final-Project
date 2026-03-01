

type ServicesCardType = {
    title: string,
    desc: string
    icon: string
}


export default function ServicesCard({ title, desc, icon }: ServicesCardType) {
    return (
        <>
            <div className="services-card">
                <img src={icon} alt="" />
                <span>{title}</span>
                <p>
                    {desc}
                </p>
            </div>
        </>
    )
}
