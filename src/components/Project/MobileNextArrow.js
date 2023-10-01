const MobileNextArrow = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "5%" }}
            onClick={onClick}
        >
            <img
                src={`${process.env.PUBLIC_URL}/img/util/right-chevron.png`}
                alt="next"
            />
        </div>
    );
};

export default MobileNextArrow;
