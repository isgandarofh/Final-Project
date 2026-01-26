type SectionDescType = {
    desc : string
}


export default function SectionDesc({desc} : SectionDescType) {
    return (
        <p>
            {desc}
        </p>
    )
}
