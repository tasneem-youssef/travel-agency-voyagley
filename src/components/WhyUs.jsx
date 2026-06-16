import icon1 from "../images/best price.svg";
import icon2 from "../images/the best.svg";
import icon3 from "../images/world.svg";
const SVGArr = [
  {
    imag: icon1,
    title: "Best Price Guarantee",
    desc: "With 500+ suppliers and the purchasing power of 300 million members, voyagely can save you more!",
  },
  {
    imag: icon2,
    title: "Award-Winning Service",
    desc: "Travel worry-free knowing that we're here if you needus, 24 hours a day",
  },
  {
    imag: icon3,
    title: "Worldwide Coverage",
    desc: "Over 1,200,000 hotels in more than 200 countries and regions & flights to over 5,000 cities",
  },
];
const TheCard = ({ card }) => {
  return (
    <div className="why-card">
      <img src={card.imag} alt="Icon" />
      <h3>{card.title}</h3>
      <p>{card.desc}</p>
    </div>
  );
};

const WhyUs = () => {
  return (
    <div className="whyUS">
      <h2 className="component-title">Why choose us</h2>
      <div className="cards-container">
        {SVGArr.map((card, index) => (
          <TheCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};
export default WhyUs;
