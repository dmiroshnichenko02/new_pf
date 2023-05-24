import SquareGroup from "../Figures/Square/SquareGroup";
import CircleGroup from "../Figures/Circle/CircleGroup";
import TriangleGroup from "../Figures/Triangle/TrianlgeGroup";
import Sidebar from "../Sidebar/Sidebad";

import "./mainPage.sass";

const MainPage = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="main__sidebar">
                    <Sidebar />
                </div>
                <div className="code">
                    <pre>
                        <code>
                            &lt;header&gt;
                            <br />
                            <span className="space-1" />
                            &lt;div class=”welcome__header”&gt;
                            <br />
                            <span className="space-2" />
                            &lt;h1&gt; Hello, my name is Danilo Miroshnichenko
                            &lt;/h1&gt;
                            <br />
                            <span className="space-2" />
                            &lt;h2&gt; I'm Frontend Developer&lt;/h2&gt;
                            <br />
                            <span className="space-1" />
                            &lt;/div&gt;
                            <br />
                            &lt;/header&gt;
                            <br />
                            &lt;nav class=”nav”&gt;
                            <br />
                            <span className="space-1" />
                            &lt;div class=”nav__about”&gt;
                            <br />
                            <span className="space-2" />
                            &lt;ul class=”nav__links”&gt;
                            <br />
                            <span className="space-3" />
                            &lt;li class=”nav__links__item”&gt;&lt;a
                            href=”/about-me”&gt;<a href="#">About me</a>
                            &lt;/a&gt;&lt;/li&gt;
                            <br />
                            <span className="space-3" />
                            &lt;li class=”nav__links__item”&gt;&lt;a
                            href=”/education”&gt;<a href="#">Education</a>
                            &lt;/a&gt;&lt;/li&gt;
                            <br />
                            <span className="space-3" />
                            &lt;li class=”nav__links__item”&gt;&lt;a
                            href=”/skills”&gt;<a href="#">Skills</a>
                            &lt;/a&gt;&lt;/li&gt;
                            <br />
                            <span className="space-3" />
                            &lt;li class=”nav__links__item”&gt;&lt;a
                            href=”/experience”&gt;
                            <a href="#">Experience</a>
                            &lt;/a&gt;&lt;/li&gt;
                            <br />
                            <span className="space-3" />
                            &lt;li class=”nav__links__item”&gt;&lt;a
                            href=”/portfolio”&gt;<a href="#">Portfolio</a>
                            &lt;/a&gt;&lt;/li&gt;
                            <br />
                            <span className="space-3" />
                            &lt;li class=”nav__links__item”&gt;&lt;a
                            href=”/contact”&gt;<a href="#">Contact</a>
                            &lt;/a&gt;&lt;/li&gt;
                            <br />
                            <span className="space-2" />
                            &lt;/ul&gt;
                            <br />
                            <span className="space-1" />
                            &lt;/div&gt;
                            <br />
                            &lt;/nav&gt;
                        </code>
                    </pre>
                </div>
                <div className="main__figures">
                    <SquareGroup />
                    <CircleGroup />
                    <TriangleGroup />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
