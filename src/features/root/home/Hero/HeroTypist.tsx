import { Typewriter } from "react-simple-typewriter";

const HeroTypist = () => {
  return (
    <div className="highlight highlight-success d-inline-block">
      <Typewriter
        words={[
          "saas",
          "mobile app",
          "software",
          "startup",
          "agency",
          "portfolio",
          "coworking",
          "crypto",
          "marketing",
        ]}
        loop
        typeSpeed={100}
        deleteSpeed={60}
        cursor
      />
    </div>
  );
};

export default HeroTypist;
