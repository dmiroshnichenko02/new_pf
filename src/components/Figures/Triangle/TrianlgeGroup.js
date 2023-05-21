import Triangle from "./Triangle";

const TriangleGroup = () => {
    return (
        <>
            <Triangle
                transform="matrix(0.91, 0.42, -0.4, 0.91, 0, 0)"
                top="2%"
                left="3%"
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                animationDuration="3.8s"
            />
            <Triangle
                top="3%"
                left="45%"
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                animationDuration="2.6s"
            />
            <Triangle
                transform="matrix(0.48, -0.88, 0.87, 0.5, 0, 0)"
                top="4%"
                left="68%"
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                animationDuration="2s"
            />
            <Triangle
                transform="matrix(-1, 0.01, -0.01, -1, 0, 0)"
                top="40%"
                left="27%"
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                animationDuration="3.8s"
            />
            <Triangle
                transform="matrix(0.92, 0.38, -0.37, 0.93, 0, 0)"
                top="38%"
                left="87%"
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                animationDuration="3.6s"
            />
            {/* Group 2 */}
            <Triangle
                transform="matrix(0.92, 0.39, -0.43, 0.9, 0, 0)"
                top="50%"
                left="1%"
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                animationDuration="3.2s"
            />
            <Triangle
                transform="matrix(-1, 0.01, -0.01, -1, 0, 0)"
                top="85%"
                left="20%"
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                animationDuration="4s"
            />
            <Triangle
                top="47%"
                left="40%"
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                animationDuration="2.9s"
            />
            <Triangle
                transform="matrix(0.51, -0.86, 0.88, 0.47, 0, 0)"
                top="55%"
                left="70%"
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                animationDuration="2.3s"
            />
            <Triangle
                transform="matrix(0.93, 0.36, -0.39, 0.92, 0, 0)"
                top="85%"
                left="95%"
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                animationDuration="3s"
            />
        </>
    );
};

export default TriangleGroup;
