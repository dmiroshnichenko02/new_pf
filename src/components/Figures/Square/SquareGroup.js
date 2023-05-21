import Square from "./Square";

const SquareGroup = () => {
    return (
        <>
            <Square
                transform="matrix(0.96, 0.27, -0.25, 0.97, 0, 0)"
                left="9%"
                top="30%"
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                animationDuration="2.2s"
            />
            <Square
                transform="matrix(0.84, 0.54, -0.52, 0.85, 0, 0)"
                left="35%"
                top="20%"
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                animationDuration="2.9s"
            />
            <Square
                left="48%"
                top="40%"
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                animationDuration="3.2s"
            />
            <Square
                transform="matrix(0.94, -0.34, 0.33, 0.94, 0, 0)"
                left="70%"
                top="20%"
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                animationDuration="3.7s"
            />
            <Square
                left="87%"
                top="20%"
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                animationDuration="2.6s"
            />
            {/* Group 2 */}
            <Square
                transform="matrix(0.86, 0.51, -0.55, 0.83, 0, 0)"
                left="35%"
                top="75%"
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                animationDuration="4s"
            />
            <Square
                left="46%"
                top="85%"
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                animationDuration="3.3s"
            />
            <Square
                transform="matrix(0.97, 0.25, -0.27, 0.96, 0, 0)"
                left="5%"
                top="87%"
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                animationDuration="2s"
            />
            <Square
                transform="matrix(0.95, -0.32, 0.35, 0.94, 0, 0)"
                left="65%"
                top="76%"
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                animationDuration="3.5s"
            />
            <Square
                left="84%"
                top="70%"
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                animationDuration="3.2s"
            />
        </>
    );
};

export default SquareGroup;
