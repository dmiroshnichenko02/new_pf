import github from "../../assets/icons/github.svg";
import telegram from "../../assets/icons/telegram.svg";
import gmail from "../../assets/icons/gmail.svg";
import house from "../../assets/icons/house.svg";
import edu from "../../assets/icons/edu.svg";
import about from "../../assets/icons/about.svg";
import skills from "../../assets/icons/skills.svg";
import exp from "../../assets/icons/exp.svg";
import portfolio from "../../assets/icons/portfolio.svg";
import contact from "../../assets/icons/contact.svg";

import "./sidebar.sass";

const Sidebar = () => {
    return (
        <>
            <aside className="sidebar">
                <div className="sidebar__links">
                    <ul className="sidebar__links__group">
                        <li className="sidebar__links__item">
                            <a href="#" className="sidebar__links__link">
                                <img src={house} alt="house" />
                            </a>
                        </li>
                        <li className="sidebar__links__item">
                            <a href="#" className="sidebar__links__link">
                                <img src={about} alt="about" />
                            </a>
                        </li>
                        <li className="sidebar__links__item">
                            <a href="#" className="sidebar__links__link">
                                <img src={edu} alt="edu" />
                            </a>
                        </li>
                        <li className="sidebar__links__item">
                            <a href="#" className="sidebar__links__link">
                                <img src={skills} alt="skills" />
                            </a>
                        </li>
                        <li className="sidebar__links__item">
                            <a href="#" className="sidebar__links__link">
                                <img src={exp} alt="exp" />
                            </a>
                        </li>
                        <li className="sidebar__links__item">
                            <a href="#" className="sidebar__links__link">
                                <img src={portfolio} alt="portfolio" />
                            </a>
                        </li>
                        <li className="sidebar__links__item">
                            <a href="#" className="sidebar__links__link">
                                <img src={contact} alt="contact" />
                            </a>
                        </li>
                    </ul>
                    <ul className="sidebar__social">
                        <li className="sidebar__social__telegram">
                            <a href="#">
                                <img src={telegram} alt="github" />
                            </a>
                        </li>
                        <li className="sidebar__social__gmail">
                            <a href="#">
                                <img src={gmail} alt="github" />
                            </a>
                        </li>
                        <li className="sidebar__social__git">
                            <a href="#">
                                <img src={github} alt="github" />
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
