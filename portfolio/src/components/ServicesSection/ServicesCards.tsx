import ServicesCard from "./ServicesCard";

export default function ServicesCards() {
  return (
    <div className="services-cards">
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <ServicesCard
            key={index}
            title="App Design"
            desc="Lorem ipsum dolor sit amet .Imperdiet Lorem ipsum dolor sitamet consectetur"
          />
        ))}
    </div>
  );
}
