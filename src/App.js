import React from 'react'
import './App.css';
import { siteData } from './assets/data'
import AppStyled from './AppStyled'

function DynamicComponent(props) {
  const Element = props.element;
  return (
  <Element {...props?.data} style={props?.style} src={props?.data?.url}>
    {props.data.text}
  </Element>
  )
}

function App() {
  return (
    <AppStyled style={siteData?.pageBody?.style}>
        {siteData?.blocks?.map((item, index) => {
          return <DynamicComponent key={index} {...item} />   
        })}
    </AppStyled>
  );
}

export default App;
