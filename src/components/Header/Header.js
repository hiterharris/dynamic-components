import { useState, useEffect } from "react";
import HeaderStyled from "./HeaderStyled";
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

function Header(props) {
    const { text, style } = props;
    const [textValue, setTextValue] = useState(text)
    useEffect(() => {
        console.log(textValue)
    }, [textValue])
    return (
        <HeaderStyled style={style}>
            <h1>{text || 'Default Header'}</h1>
            <EditText showEditButton name="header" value={textValue} onChange={e => setTextValue(e.target.value)} />
        </HeaderStyled>
    )
}

export default Header;
