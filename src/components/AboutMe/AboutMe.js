import "./aboutMe.sass";

import photo from "../../assets/img/about/main_photo.jpg";

const AboutMe = () => {
    return (
        <>
            <div className="about">
                <div className="container">
                    <h2>About Me</h2>
                    <div className="about__wrapper">
                        <div className="about__photo">
                            <img src={photo} alt="photo" />
                        </div>
                        <div className="about__descr">
                            <h3>Frontend Devepoler</h3>
                            <p className="about__text">
                                Я, Данило Мірошниченко, мені 20 років і я
                                Front-end розробник. Свій шлях до програмування
                                я розпочав ще у шкільні роки.
                                <br />
                                <br /> Все почалося з простого ознайомлення з
                                комп’ютером та інтернетом, та врешті-решт дійшло
                                до написання простого сайту на HTML, наразі в
                                мене вже є власне портфоліо, досвід з написання
                                : Landing page, SPA, e-Commerce та ін.
                                <br />
                                <br /> Я навчався спочатку у звичайній школі, а
                                потім пішов в університет, де навчався на
                                фізико-математичному факультеті за спеціальністю
                                014 Середня освіта “Математика та інформатика”.
                                Власне хочу підкреслити, що й там на не полишав
                                свого хобі та з більшим захопленням почав
                                заглиблюватися у програмування, в часності у web
                                розробку. Як людина я самостійний,
                                відповідальний, чесний, досить швидко навчаюся.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;
