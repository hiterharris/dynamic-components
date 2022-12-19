import ImageStyled from './ImageStyled'

function Image(props) {
    const { src, alt, style } = props;
    return (
        <ImageStyled style={style}>
            <img src={src} alt={alt} style={style?.img} />
        </ImageStyled>
    )
}

export default Image;
