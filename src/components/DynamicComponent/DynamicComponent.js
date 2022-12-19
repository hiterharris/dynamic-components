function DynamicComponent(props) {
    const Element = props.element;
    return (
    <Element {...props?.data} style={props?.style} src={props?.data?.url}>
      {props.data.text}
    </Element>
    )
  }

  export default DynamicComponent;
  