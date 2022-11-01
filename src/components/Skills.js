import react, {useEffect} from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import './Skills.css';
import { CircularProgressbar } from 'react-circular-progressbar';

const skills = [
  { name: "React", cssProp: "--react", strength: 100 },
  { name: "Redux", cssProp: "--redux", strength: 90 },
  { name: "HTML", cssProp: "--html", strength: 100 },
  { name: "CSS", cssProp: "--css", strength: 95 },
  { name: "C++", cssProp: "--cpp", strength: 100 },
  { name: "C", cssProp: "--c", strength: 90 },
  { name: "Java", cssProp: "--java", strength: 95 },
  { name: "PHP", cssProp: "--php", strength: 80 },
  { name: "Javascript", cssProp: "--javascript", strength: 95 },
  { name: "Spring", cssProp: "--spring", strength: 90 },
  { name: "MATLAB", cssProp: "--matlab", strength: 90 },
];

export const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 style={{paddingBottom: "10px"}}>Skills</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map(skill => <div className="item ">
                  <div className={skill.cssProp.slice(2)}>
                    <div className={`dot ${skill.cssProp.slice(2)}`}></div>
                    <svg >
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="number">
                      <h3>{skill.strength}<span>%</span></h3>
                      <p>{skill.name}</p>
                    </div>
                  </div>
                </div>)}
              </Carousel>
              <p style={{paddingTop: "10px"}}>and many others...</p>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}
