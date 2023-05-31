import "./portfolio.sass";

import uber from "../../assets/img/portfolio/uber.jpg";
import pulse from "../../assets/img/portfolio/pulse.jpg";
import thor from "../../assets/img/portfolio/thor.jpeg";
import coffee from "../../assets/img/portfolio/coffee.png";

const Portfolio = () => {
    return (
        <>
            <div className="portfolio">
                <div className="container">
                    <h2 className="portfolio__title">Portfolio</h2>
                    <h3 className="portfolio__works-block__title">
                        Мої основні роботи
                    </h3>
                    <div className="portfolio__works">
                        <div className="portfolio__works__item">
                            <div className="portfolio__works__descr">
                                <div className="portfolio__works__title">
                                    Uber
                                </div>
                                <div className="portfolio__works__text">
                                    Small landing page
                                </div>
                                <div className="portfolio__works__links">
                                    <div className="portfolio__works__git">
                                        <a href="#" target="_blank">
                                            GitHub
                                        </a>
                                    </div>
                                    <div className="portfolio__works__see">
                                        <a href="#" target="_blank">
                                            Look now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio__works__item">
                            <div className="portfolio__works__descr">
                                <div className="portfolio__works__title">
                                    Smart
                                </div>
                                <div className="portfolio__works__text">
                                    Small landing page
                                </div>
                                <div className="portfolio__works__links">
                                    <div className="portfolio__works__git">
                                        <a href="#" target="_blank">
                                            GitHub
                                        </a>
                                    </div>
                                    <div className="portfolio__works__see">
                                        <a href="#" target="_blank"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio__works__item">
                            <div className="portfolio__works__descr">
                                <div className="portfolio__works__title">
                                    Marvel
                                </div>
                                <div className="portfolio__works__text">
                                    SPA Marvel with Marvel API
                                </div>
                                <div className="portfolio__works__links">
                                    <div className="portfolio__works__git">
                                        <a href="#" target="_blank">
                                            GitHub
                                        </a>
                                    </div>
                                    <div className="portfolio__works__see">
                                        <a href="#" target="_blank"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio__works__item">
                            <div className="portfolio__works__descr">
                                <div className="portfolio__works__title">
                                    Coffee shop
                                </div>
                                <div className="portfolio__works__text">
                                    Simple SPA
                                </div>
                                <div className="portfolio__works__links">
                                    <div className="portfolio__works__git">
                                        <a href="#" target="_blank">
                                            GitHub
                                        </a>
                                    </div>
                                    <div className="portfolio__works__see">
                                        <a href="#" target="_blank"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio__works__item">
                            <div className="portfolio__works__descr">
                                <div className="portfolio__works__title">
                                    Food
                                </div>
                                <div className="portfolio__works__text">
                                    Web page
                                </div>
                                <div className="portfolio__works__links">
                                    <div className="portfolio__works__git">
                                        <a href="#" target="_blank">
                                            GitHub
                                        </a>
                                    </div>
                                    <div className="portfolio__works__see">
                                        <a href="#" target="_blank"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className="portfolio__test__section-title">
                        Виконані тестові завдання
                    </h3>
                    <div className="portfolio__test">
                        <div className="portfolio__test__wrapper">
                            <div className="portfolio__test__item">
                                <div className="portfolio__test__descr">
                                    <div className="portfolio__test__title">
                                        Abz group
                                    </div>
                                    <div className="portfolio__test__text">
                                        Test work
                                    </div>
                                    <div className="portfolio__test__links">
                                        <div className="portfolio__test__git">
                                            <a href="#" target="_blank">
                                                GitHub
                                            </a>
                                        </div>
                                        <div className="portfolio__test__see">
                                            <a href="#" target="_blank">
                                                Look now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio__test__item">
                                <div className="portfolio__test__descr">
                                    <div className="portfolio__test__title">
                                        Abz group
                                    </div>
                                    <div className="portfolio__test__text">
                                        Test work
                                    </div>
                                    <div className="portfolio__test__links">
                                        <div className="portfolio__test__git">
                                            <a href="#" target="_blank">
                                                GitHub
                                            </a>
                                        </div>
                                        <div className="portfolio__test__see">
                                            <a href="#" target="_blank">
                                                Look now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
