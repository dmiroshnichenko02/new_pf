import Slider from "react-slick";

import html from "../../assets/img/skills/html5.svg";
import css from "../../assets/img/skills/css3.svg";
import js from "../../assets/img/skills/js.svg";
import jquery from "../../assets/img/skills/jquery.svg";
import react from "../../assets/img/skills/react.svg";
import redux from "../../assets/img/skills/redux.svg";
import wordpress from "../../assets/img/skills/wordpress.svg";
import typescript from "../../assets/img/skills/typescript.svg";

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
        className: "skills__slider__wrapper",
        variableWidth: true,
    };

    return (
        <div className="skills__slider">
            <Slider {...settings}>
                <div
                    className="skills__slider__block"
                    style={{ width: "349px" }}
                >
                    <div>
                        <img src={html} alt="html" />
                        <h3 className="skills__slider__title">HTML5</h3>
                        <p className="skills__slider__descr">
                            Саме це створює основу вашого сайту або додатку, а
                            п'ята версія дозволяє мені створювати для вас більш
                            SEO-оптимізовану структуру продукта
                            <br />
                            -Теоретияна база: <br />
                            -Семантичність.
                            <br />
                            -SEO оптимізація(meta теги і т.д.)
                        </p>
                    </div>
                </div>
                <div className="skills__slider__block" style={{ width: 349 }}>
                    <div>
                        <img src={css} alt="css" />
                        <h3 className="skills__slider__title">CSS3</h3>
                        <p className="skills__slider__descr">
                            Ця мова стилів дозволяє мені створювати будь-який
                            зовнішній вигляд вашого сайту або додатку. Все
                            обмежується тільки фантазією!
                            <br />
                            Теоретична база:
                            <br />
                            -CSS3 animation
                            <br />
                            -CSS variables
                            <br />
                            -Використання препроцессорів: SASS/SCSS.<br/>
                            -Flexbox<br/>
                            -Grid
                        </p>
                    </div>
                </div>
                <div className="skills__slider__block" style={{ width: 349 }}>
                    <div>
                        <img src={js} alt="JS" />
                        <h3 className="skills__slider__title">JavaScript</h3>
                        <p className="skills__slider__descr">
                            Ця мова програмування дозволяє "оживити" все що
                            завгодно: слайдери, вікна, підказки, вкладки,
                            отримання даних від серверу та багато іншого.
                            <br />
                            Теоретична база:
                            <br />
                            -Розуміння та використання принципів SOLID, DRY,
                            KISS
                            <br />
                            -Async/await, AJAX, REST API
                            <br />
                            -Event loop
                            <br />
                            -Export/import modules system
                        </p>
                    </div>
                </div>
                <div className="skills__slider__block" style={{ width: 349 }}>
                    <div>
                        <img src={jquery} alt="JQuerry" />
                        <h3 className="skills__slider__title">JQuery</h3>
                        <p className="skills__slider__descr">
                            Бібліотека Jquery дозволить прискорити розробку. Без
                            необхідності інтегрувати в проект ми не будемо, але
                            навик роботи з нею присутній.
                            <br />
                            Теоретична база:
                            <br />
                            -JQuery UI
                            <br />
                            -AJAX
                        </p>
                    </div>
                </div>
                <div className="skills__slider__block" style={{ width: 349 }}>
                    <div>
                        <img src={react} alt="React" />
                        <h3 className="skills__slider__title">React</h3>
                        <p className="skills__slider__descr">
                            Ця бібліотека дозволяє створювати web-додатки. Ми
                            можемо створити максимально інтерактивний продукт
                            саме за вашими вимогами.
                            <br />
                            Теоретична база:
                            <br />
                            -Class components
                            <br />
                            -React function components
                            <br />
                            -React Hooks
                            <br />
                            -React lifecycle methods
                            <br />
                            -React portal
                            <br />
                            -Zombie Child
                            <br />
                            -React SEO (React Helmet)
                        </p>
                    </div>
                </div>
                <div className="skills__slider__block" style={{ width: 349 }}>
                    <div>
                        <img src={redux} alt="redux" />
                        <h3 className="skills__slider__title">Redux</h3>
                        <p className="skills__slider__descr">
                            Redux — бібліотека для JavaScript з відкритим кодом,
                            призначена для керування станом програми. Містить
                            низку інструментів, що дозволяють значно спростити
                            передачу даних сховища через контекст.
                            <br />
                            Теоретична база:
                            <br />
                            -Redux devtools
                            <br />
                            -Store enchancers
                            <br />
                            -Middleware
                            <br />
                            -Redux Thunk
                            <br />
                            -Redux Toolkit
                            <br />
                            -RTK Query
                        </p>
                    </div>
                </div>
                <div className="skills__slider__block" style={{ width: 349 }}>
                    <div>
                        <img src={wordpress} alt="WordPress" />
                        <h3 className="skills__slider__title">WordPress</h3>
                        <p className="skills__slider__descr">
                            Cистема керування вмістом з відкритим кодом, яка
                            через свою простоту в установленні та використанні
                            широко застосовується для створення вебсайтів. Сфера
                            використання — від блогів до складних вебсайтів.
                            <br />
                            Теоретична база:
                            <br />
                            -WordPress Plugins
                            <br />
                            -Underscores
                            <br />
                            -Filters and Hooks
                            <br />
                            -WordPress SEO
                        </p>
                    </div>
                </div>
                <div className="skills__slider__block" style={{ width: 349 }}>
                    <div>
                        <img src={typescript} alt="TypeScript" />
                        <h3 className="skills__slider__title">TypeScipt</h3>
                        <p className="skills__slider__descr">
                            TypeScript це JavaScript із синтаксисом для
                            типізації. А якщо трохи довше, то TypeScript є мовою
                            програмування зі строгою типізацією даних,
                            побудований на базі всіма відомого JavaScript і
                            збагачує його можливості.
                            <br />
                            Теоретична база:
                            <br />
                            -Type Guard
                            <br />
                            -Types, Narrowing, Interfaces
                            <br />
                            -Generics(functions/ classes)
                            <br />
                            -Operators
                            <br />
                            -Utility types
                            <br />
                            -Decorators
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default SkillsSlider;
