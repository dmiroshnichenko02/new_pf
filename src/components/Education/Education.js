import EducationSlider from "./EducationSlider";

import "./education.sass";

const Education = () => {
    return (
        <>
            <div className="education">
                <div className="container">
                    <h2>Education</h2>
                    <div className="education__wrapper">
                        <div className="education__study__university">
                            <h3>Освіта</h3>
                            <div className="education__study__university_name">
                                ДДПУ м. Слов'янськ <br /> Диплом бакалавра
                                (2019-2023)
                            </div>
                            <div className="education__study__university_descr">
                                Я навчався на фізико-математичному факультеті за
                                спеціальністю "014 Середня освіта Математика та
                                інформатика". Відвідував всі додаткові заняття,
                                курси та факультативи. Будучи студентом я багато
                                читав та вивчав всього нового, навіть у вільний
                                від навчання час. Моя спеціальність допомогла
                                мені досягти часткових успіхів у вивченні
                                Web-розробки.
                            </div>
                        </div>
                        <div className="education__study__udemy">
                            <div className="education__study__udemy_name">
                                Udemy
                            </div>
                            <ul className="education__study__udemy_list">
                                <li className="education__study__udemy_item">
                                    <div>WodrPress</div>
                                    <div className="education__study__udemy_item_descr">
                                        Посилання на курс: <br />
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quaerat.
                                    </div>
                                </li>
                                <li className="education__study__udemy_item">
                                    <div>TypeScript</div>
                                    <div className="education__study__udemy_item_descr">
                                        Посилання на курс: <br />
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quaerat.
                                    </div>
                                </li>
                                <li className="education__study__udemy_item">
                                    <div>Web develoepr</div>
                                    <div className="education__study__udemy_item_descr">
                                        Посилання на курс: <br />
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quaerat.
                                    </div>
                                </li>
                                <li className="education__study__udemy_item">
                                    <div>JavaScript</div>
                                    <div className="education__study__udemy_item_descr">
                                        Посилання на курс: <br />
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quaerat.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h2 className="education__certificate__title">
                        Certificates
                    </h2>
                    <EducationSlider />
                </div>
            </div>
        </>
    );
};

export default Education;
