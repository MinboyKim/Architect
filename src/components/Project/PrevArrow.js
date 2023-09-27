const PrevArrow = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
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

export default PrevArrow;
