import Circle from "./Circle";

const CircleGroup = () => {
    return (
        <>
            <Circle
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                left="20%"
                top="3%"
                animationDuration="3.7s"
            />
            <Circle
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                left="52%"
                top="17%"
                animationDuration="3.2s"
            />
            <Circle
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                left="56%"
                top="35%"
                animationDuration="2.1s"
            />
            <Circle
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                left="67%"
                top="37%"
                animationDuration="4s"
            />
            <Circle
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                left="90%"
                top="2%"
                animationDuration="3.4s"
            />
            {/* Group 2 */}
            <Circle
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                left="20%"
                top="50%"
                animationDuration="3.5s"
            />
            <Circle
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                left="50%"
                top="60%"
                animationDuration="2.5s"
            />
            <Circle
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                left="55%"
                top="75%"
                animationDuration="3.5s"
            />
            <Circle
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                left="72%"
                top="90%"
                animationDuration="3s"
            />
            <Circle
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                left="95%"
                top="50%"
                animationDuration="2s"
            />
        </>
    );
};

export default CircleGroup;
