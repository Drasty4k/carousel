import { quoteIcon } from "./assets";
import "./carousel.css";

type Reviewer = {
  name: string;
  companyName: string;
  logo: string;
};

export type Slides = {
  review: string;
  highlightedText: string;
  color: string;
  reviewer: Reviewer;
};

type Props = {
  slides: Slides[];
};

const Carousel: React.FC<Props> = ({ slides }) => {
  return (
    <div className="carousel__container">
      {slides.map(({ review, highlightedText, color, reviewer }, index) => (
        <div className="carousel__slide">
          <img src={quoteIcon} alt="Quote Icon" />
          <p className="carousel__slide-review tk-neue-haas-grotesk-display">
            {review}
          </p>
          <div className="carousel__slide-reviewer tk-neue-haas-grotesk-text">
            <img src={reviewer.logo} alt={`${reviewer.companyName}'s Logo`} />
            <p className="carousel__slide-reviewer-name">{reviewer.name}</p>
            <p className="carousel__slide-reviewer-company-name">
              {reviewer.companyName}
            </p>
          </div>
          <div className="carousel__bar" />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
