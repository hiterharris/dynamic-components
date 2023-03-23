import React, { useEffect, useState } from 'react'
import './App.css';
import { siteData } from './assets/data'
import AppStyled from './AppStyled'
import { DynamicComponent } from './components';
import { Header, Toolbar } from './components';

function App() {
  const [blocks, setBlocks] = useState(siteData.blocks);
  return (
    <AppStyled style={siteData?.pageBody?.style}>
        {blocks?.map((item, index) => {
          return <DynamicComponent key={index} {...item} />   
        })}
        <Toolbar siteData={siteData} blocks={blocks} setBlocks={setBlocks} />
    </AppStyled>
  );
}

export default App;
