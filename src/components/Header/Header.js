import HeaderStyled from "./HeaderStyled";

function Header(props) {
    const { text, style } = props;
    return (
        <HeaderStyled style={style}>
            <h1>{text || 'Default Header'}</h1>
        </HeaderStyled>
    )
}

export default Header;
