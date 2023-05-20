import Square from "./Square";

const SquareGroup = () => {
    return (
        <>
            <Square
                transform="matrix(0.96, 0.27, -0.25, 0.97, 0, 0)"
                left="114.88px"
                top="306.62px"
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
            <Square
                transform="matrix(0.84, 0.54, -0.52, 0.85, 0, 0)"
                left="538.33px"
                top="155.7px"
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
            <Square
                left="758.23px"
                top="302.73px"
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
            <Square
                transform="matrix(0.94, -0.34, 0.33, 0.94, 0, 0)"
                left="1086.13px"
                top="192.46px"
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
            <Square
                left="1369.82px"
                top="173.37px"
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
            {/* Group 2 */}
            <Square
                transform="matrix(0.86, 0.51, -0.55, 0.83, 0, 0)"
                left="529.47px"
                top="523.44px"
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
            <Square
                left="751.53px"
                top="659.83px"
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
            <Square
                transform="matrix(0.97, 0.25, -0.27, 0.96, 0, 0)"
                left="101.87px"
                top="663.43px"
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
            <Square
                transform="matrix(0.95, -0.32, 0.35, 0.94, 0, 0)"
                left="1082.66px"
                top="557.54px"
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
            <Square
                left="1369.13px"
                top="539.83px"
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
        </>
    );
};

export default SquareGroup;
