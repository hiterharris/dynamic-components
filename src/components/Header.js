function Header(props) {
    const { text } = props;
    return <h1>{text || 'Default Header'}</h1>
}

export default Header;
