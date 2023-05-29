import SkillsSlider from "./SkillsSlider";

import "./skills.sass";

const Skills = () => {
    return (
        <>
            <div className="skills">
                <div className="container">
                    <h2 className="skills__title">My skills</h2>
                    <SkillsSlider />
                </div>
            </div>
        </>
    );
};

export default Skills;
