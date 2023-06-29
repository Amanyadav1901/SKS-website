import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  const bgImagestyle = {
    backgroundImage: `url('src/assets/bg2.png')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div
          className="bg-cover bg-no-repeat  bg-center relative z-0"
          style={bgImagestyle}
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <Feedbacks />
        <div className=" bg-black relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
