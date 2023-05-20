import Triangle from "./Triangle";

const TriangleGroup = () => {
    return (
        <>
            <Triangle
                transform="matrix(0.91, 0.42, -0.4, 0.91, 0, 0)"
                top="0.17px"
                left="33px"
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
            <Triangle
                top="33.23px"
                left="715.22px"
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
            <Triangle
                transform="matrix(0.48, -0.88, 0.87, 0.5, 0, 0)"
                top="39.47px"
                left="1103.47px"
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
            <Triangle
                transform="matrix(-1, 0.01, -0.01, -1, 0, 0)"
                top="302.54px"
                left="404.89px"
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
            <Triangle
                transform="matrix(0.92, 0.38, -0.37, 0.93, 0, 0)"
                top="325.12px"
                left="1399.14px"
                filter="blur(4px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
            {/* Group 2 */}
            <Triangle
                transform="matrix(0.92, 0.39, -0.43, 0.9, 0, 0)"
                top="379.15px"
                left="19.74px"
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
            <Triangle
                transform="matrix(-1, 0.01, -0.01, -1, 0, 0)"
                top="659.66px"
                left="394.73px"
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
            <Triangle
                top="409.83px"
                left="708.1px"
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
            <Triangle
                transform="matrix(0.51, -0.86, 0.88, 0.47, 0, 0)"
                top="415.62px"
                left="1100.16px"
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
            <Triangle
                transform="matrix(0.93, 0.36, -0.39, 0.92, 0, 0)"
                top="680.6px"
                left="1485.74px"
                filter="blur(3px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            />
        </>
    );
};

export default TriangleGroup;
