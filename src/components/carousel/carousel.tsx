import "./carousel.css";
import ReactDOMServer from "react-dom/server";
import { useState } from "react";
import { QuoteIcon } from "../UI/icons";

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
  const [current, setCurrent] = useState<number>(0);

  const swapSlide = (index: number) => () => {
    setCurrent(index);
  };

  const getTextWithHighlight = (
    text: string,
    highlightedText: string,
    color: string
  ) => {
    const textWithHighlight = text.replace(
      highlightedText,
      ReactDOMServer.renderToString(
        <span style={{ color }}>{highlightedText}</span>
      )
    );

    return textWithHighlight;
  };

  return (
    <div className="carousel__container">
      {slides.map(({ review, highlightedText, color, reviewer }, index) => (
        <div
          key={index}
          className={
            index === current
              ? "carousel__slide active"
              : "carousel__slide hidden"
          }
        >
          <QuoteIcon strokeColor={color} />
          <p
            className="carousel__slide-review tk-neue-haas-grotesk-display"
            dangerouslySetInnerHTML={{
              __html: getTextWithHighlight(review, highlightedText, color),
            }}
          />
          <div className="carousel__slide-reviewer tk-neue-haas-grotesk-text">
            <img src={reviewer.logo} alt={`${reviewer.companyName}'s Logo`} />
            <p className="carousel__slide-reviewer-name">{reviewer.name}</p>
            <p className="carousel__slide-reviewer-company-name">
              {reviewer.companyName}
            </p>
          </div>
        </div>
      ))}
      <div className="carousel__bar-container">
        {slides.map((_, index) => (
          <div
            key={index}
            className="carousel__bar"
            role="button"
            onClick={swapSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
