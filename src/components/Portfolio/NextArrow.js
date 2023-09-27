const NextArrow = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "50%", top: "0" }}
            onClick={onClick}
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

export default NextArrow;
