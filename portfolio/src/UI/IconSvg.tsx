const IconSvg = ({
                     name,
                     size = 24,
                     className = "",
                 }: any) => {
    return (
        <svg
            className={`svg-icon-${name} ` + className}
            style={{ width: size, height: size }}
        >
            <use xlinkHref={`/symbol/sprite.symbol.svg#${name}`} />
        </svg>
    );
};

export default IconSvg