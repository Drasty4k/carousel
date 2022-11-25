import "./App.css";
import { karmaGuruLogo, thePancakeCollectiveLogo } from "./assets";
import { Carousel } from "./components/carousel";
import { Slides } from "./components/carousel/carousel";

const slides: Slides[] = [
  {
    review:
      "An experience that makes us feel like we're covered in maple syrup - It's a good thing",
    highlightedText: "It's a good thing",
    color: "#FF88AD",
    reviewer: {
      name: "The whole team @",
      companyName: "The Pancake Collective™",
      logo: thePancakeCollectiveLogo,
    },
  },
  {
    review:
      "This piece of software is the shit, I've never tried anything like it.",
    highlightedText: "the shit",
    color: "#88FFED",
    reviewer: {
      name: "Mr. Face",
      companyName: "Karma Guru @ Face Co™",
      logo: karmaGuruLogo,
    },
  },
  {
    review:
      "Personal touch is exceptional. Team is always available and insightful.",
    highlightedText: "is exceptional",
    color: "#2DE044",
    reviewer: {
      name: "The whole team @ Again",
      companyName: "The Pancake Collective™ Again",
      logo: thePancakeCollectiveLogo,
    },
  },
  {
    review:
      "Good prices and excellent support. The tech support is solid and manned with knowledgeable people.",
    highlightedText: "excellent support",
    color: "#CD2EEB",
    reviewer: {
      name: "Mr. Face Again",
      companyName: "Karma Guru @ Face Co™ Again",
      logo: karmaGuruLogo,
    },
  },
  {
    review:
      "They are fast, friendly, efficient and just give great support. Highly recommend.",
    highlightedText: "fast, friendly, efficient",
    color: "#F9952C",
    reviewer: {
      name: "The whole team @ Again x2",
      companyName: "The Pancake Collective™ Again x2",
      logo: karmaGuruLogo,
    },
  },
];

function App() {
  return (
    <div className="App">
      <Carousel slides={slides} />
    </div>
  );
}

export default App;
