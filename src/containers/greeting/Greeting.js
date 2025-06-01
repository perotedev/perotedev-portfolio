import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/dev_on_computer";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  // const animated = illustration.animated;
  const animated = false;

  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contato" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={greeting.resumeLink}
                    download="CURRICULO_RODRIGO.pdf"
                    className="download-link-button"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Button text="Meu Currículo" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className={`greeting-image-div ${!animated ? "right" : ""}`}>
            {animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="Perote DEV"
                className="greeting-image"
                src={require("../../assets/images/perotedev2.png")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
