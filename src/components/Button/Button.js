import ButtonStyled from './ButtonStyled.js'
import { Button as MuiButton } from '@mui/material/Button';

function Button(props) {
    const { text, style } = props;
    return (
        <ButtonStyled style={style}>
            <MuiButton />
        </ButtonStyled>
    )
}

export default Button;
