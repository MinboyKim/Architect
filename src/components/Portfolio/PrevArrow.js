const PrevArrow = ({ className, style, onClick, index }) => {
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                left: "0%",
                top: "0",
                cursor: index === 0 ? "default" : "pointer",
            }}
            onClick={index === 0 ? null : onClick}
        >
            <div
                style={{
                    width: "27.84375rem",
                    height: "39.375rem",
                }}
            ></div>
        </div>
    );
};

export default PrevArrow;
