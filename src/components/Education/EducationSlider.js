import Slider from "react-slick";

import cerf1 from "../../assets/img/education/certification/wp_certificat.jpg";

const EducationSlider = () => {
    const settings = {
        dots: true, // Показывать точки для навигации по слайдам
        infinite: true, // Бесконечное прокручивание слайдов
        speed: 500, // Скорость прокрутки слайдов (в миллисекундах)
        slidesToShow: 1, // Количество слайдов для показа одновременно
        slidesToScroll: 1, // Количество слайдов, прокручиваемых за один раз
    };

    return (
        <div className="education__certificate">
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
        </div>
    );
};

export default EducationSlider;
