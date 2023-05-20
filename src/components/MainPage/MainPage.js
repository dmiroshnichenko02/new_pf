import SquareGroup from "../Figures/Square/SquareGroup";
import CircleGroup from "../Figures/Circle/CircleGroup";
import TriangleGroup from "../Figures/Triangle/TrianlgeGroup";

import "./mainPage.sass";

const MainPage = () => {
    return (
        <div className="main">
            <div className="container">
                <SquareGroup />
                <CircleGroup />
                <TriangleGroup />
            </div>
        </div>
    );
};

export default MainPage;
