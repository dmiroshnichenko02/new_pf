import Slider from "react-slick";

import html from "../../assets/img/skills/html5.svg";
import css from "../../assets/img/skills/css3.svg";
import js from "../../assets/img/skills/js.svg";
import jquery from "../../assets/img/skills/jquery.svg";
import react from "../../assets/img/skills/react.svg";

import "./skills.sass";

const SkillsSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        className: "skills__slider__wrapper",
        variableWidth: true,
    };

    return (
        <div className="skills__slider">
            <Slider {...settings}>
                <div className="skills__slider__block" style={{ width: 349 }}>
                    <div>
                        <img src="" alt="" />
                        <h3 className="skills__slider__title">123</h3>
                        <p className="skills__slider__descr">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Est, voluptate fugiat natus ratione aut nobis.
                        </p>
                    </div>
                </div>
                <div className="skills__slider__block" style={{ width: 349 }}>
                    <div>
                        <img src={html} alt="html" />
                        <h3 className="skills__slider__title">HTML5</h3>
                        <p className="skills__slider__descr">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Est, voluptate fugiat natus ratione aut nobis.
                        </p>
                    </div>
                </div>
                <div className="skills__slider__block" style={{ width: 349 }}>
                    <div>
                        <img src={css} alt="css" />
                        <h3 className="skills__slider__title">CSS3</h3>
                        <p className="skills__slider__descr">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Est, voluptate fugiat natus ratione aut nobis.
                        </p>
                    </div>
                </div>
                <div className="skills__slider__block" style={{ width: 349 }}>
                    <div>
                        <img src={js} alt="JS" />
                        <h3 className="skills__slider__title">JavaScript</h3>
                        <p className="skills__slider__descr">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Est, voluptate fugiat natus ratione aut nobis.
                        </p>
                    </div>
                </div>
                <div className="skills__slider__block" style={{ width: 349 }}>
                    <div>
                        <img src={jquery} alt="JQuerry" />
                        <h3 className="skills__slider__title">JQuerry</h3>
                        <p className="skills__slider__descr">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Est, voluptate fugiat natus ratione aut nobis.
                        </p>
                    </div>
                </div>
                <div className="skills__slider__block" style={{ width: 349 }}>
                    <div>
                        <img src={react} alt="React" />
                        <h3 className="skills__slider__title">React</h3>
                        <p className="skills__slider__descr">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Est, voluptate fugiat natus ratione aut nobis.
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default SkillsSlider;
