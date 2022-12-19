import ParagraphStyled from "./ParagraphStyled";

function Paragraph(props) {
    const { text, style } = props;
    return (
        <ParagraphStyled style={style}>
            <p>{text || 'default Paragraph'}</p>
        </ParagraphStyled>
    )
}

export default Paragraph;
