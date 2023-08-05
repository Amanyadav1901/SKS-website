import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Carousel } from "react-carousel-minimal";

const Hero = () => {
  const data = [
    {
      image: "src/assets/bg3.png",
      caption: "San Francisco",
    },
    {
      image: "src/assets/bg2.png",
      caption: "Scotland",
    },
    {
      image: "src/assets/bg4.png",
      caption: "Scotland",
    },
    {
      image: "src/assets/bg1.jpg",
      caption: "Scotland",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      {/* <div
        className={`${styles.paddingX} absolute inset-0 top-[120px]
         max-w-3xl mx-auto flex flex-row items-start gap-5 z-10 box-border h-auto`}
        style={{
          border: "2px solid black",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-black`}>
            Hi, We're{" "}
            <span className="text-[#915eff]">SKS Engineers Group</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2
             text-black-100`}
          >
            Winning Through Perfection
            <br className="sm:block hidden" />
          </p>
        </div>
      </div> */}
      {/* <ComputersCanvas /> */}
      <div>
        <div
          className="sm : h-[500px]"
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height="800px"
            captionStyle={captionStyle}
            radius="10px"
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              margin: "40px auto",
            }}
          />
        </div>
      </div>

      <div
        className="absolute xs:bottom-10 bottom-32 w-full
        flex justify-center items-center"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[54px] rounded-3xl border-4
            border-secondary flex justify-center items-start
            p-2"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
