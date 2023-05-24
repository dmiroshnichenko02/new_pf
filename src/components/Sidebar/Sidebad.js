import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./sidebar.sass";

const Sidebar = () => {
    return (
        <>
            <aside className="sidebar">
                <div className="sidebar__links">
                    <ul className="sidebar__links__group">
                        <li className="sidebar__links__item">
                            <a href="#" className="sidebar__links__link"></a>
                        </li>
                        <li className="sidebar__links__item">
                            <a href="#" className="sidebar__links__link"></a>
                        </li>
                        <li className="sidebar__links__item">
                            <a href="#" className="sidebar__links__link"></a>
                        </li>
                        <li className="sidebar__links__item">
                            <a href="#" className="sidebar__links__link"></a>
                        </li>
                        <li className="sidebar__links__item">
                            <a href="#" className="sidebar__links__link"></a>
                        </li>
                        <li className="sidebar__links__item">
                            <a href="#" className="sidebar__links__link"></a>
                        </li>
                        <li className="sidebar__links__item">
                            <a href="#" className="sidebar__links__link"></a>
                        </li>
                        <li className="sidebar__links__item">
                            <a href="#" className="sidebar__links__link"></a>
                        </li>
                    </ul>
                    <ul className="sidebar__social">
                        <li className="sidebar__social__telegram">
                            <a href="#">
                                <FontAwesomeIcon
                                    icon="fa-brands fa-telegram"
                                    style={{ color: "white", zIndex: "25" }}
                                />
                            </a>
                        </li>
                        <li className="sidebar__social__gmail">
                            <a href="#">
                                <FontAwesomeIcon
                                    icon="fa-solid fa-inbox"
                                    style={{ color: "#000000" }}
                                />
                            </a>
                        </li>
                        <li className="sidebar__social__git">
                            <a href="#">
                                <FontAwesomeIcon
                                    icon="fa-brands fa-github"
                                    style={{ color: "#000000" }}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
