function Header(props) {
    const { text } = props;
    return <h1>{text || 'default Header'}</h1>
}

export default Header;
