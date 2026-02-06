
type PageTitleType = {
    title : string
}

export default function PageTitle({title} : PageTitleType) {
  return (
    <>
          <h2>{title}</h2>
    </>
  )
}
