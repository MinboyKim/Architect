const MobilePrevArrow = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                left: "5%",
            }}
            onClick={onClick}
        >
            <img
                src={`${process.env.PUBLIC_URL}/img/util/left-chevron.png`}
                alt="next"
            />
        </div>
    );
};

export default MobilePrevArrow;
