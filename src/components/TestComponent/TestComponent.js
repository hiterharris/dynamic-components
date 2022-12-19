import TestComponentStyled from './TestComponentStyled.js'

function TestComponent(props) {
    return (
        <TestComponentStyled name="Hello" style={props?.style}>
            <h1>TestComponent</h1>
        </ TestComponentStyled>
    )
}

export default TestComponent;
