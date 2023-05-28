import Slider from "react-slick";

import "./education.sass";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cerf1 from "../../assets/img/education/certification/wp_certificat.jpg";

const EducationSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        className: "education__certificate__item",
    };

    return (
        <Slider {...settings}>
            <div>
                <img src={cerf1} alt="certificate" />
            </div>
            <div>
                <img src={cerf1} alt="certificate" />
            </div>
            <div>
                <img src={cerf1} alt="certificate" />
            </div>
            <div>
                <img src={cerf1} alt="certificate" />
            </div>
        </Slider>
    );
};

export default EducationSlider;
