import "./App.css";
import { thePancakeCollectiveLogo } from "./assets";
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
];

function App() {
  return (
    <div className="App">
      <Carousel slides={slides} />
    </div>
  );
}

export default App;
