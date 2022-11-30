function Paragraph(props) {
    const { text } = props;
    return <p>{text || 'default Paragraph'}</p>
}

export default Paragraph;
