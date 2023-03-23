import React from 'react'
import { Header, Paragraph, Image } from '..';
import Button from '@mui/material/Button';
import './Toolbar.css';

function Toolbar({ blocks, setBlocks }) {

    const addHeader = () => {
      const newBlock = {
        id: blocks.length + 1,
        order: blocks.length + 1,
        type: "header",
        element: Header,
        data: {
            text: "Header",
            level: 2,
        },
        style: {
            color: 'white'
        }
      };
      setBlocks([...blocks, newBlock])
    };

    const addParagraph = () => {
        const newBlock = {
          id: blocks.length + 1,
          order: blocks.length + 1,
          type: 'paragraph',
          element: Paragraph,
          data: {
              text: 'Paragraph'
          },
          style: {
              color: 'white'
          }
        };
        setBlocks([...blocks, newBlock])
      };

      const addButton = () => {
        const newBlock = {
          id: blocks.length + 1,
          order: blocks.length + 1,
          type: 'button',
          element: Button,
          data: {
              text: 'Click Me!',
              variant: 'contained'
          },
          style: {
              backgroundColor: 'green'
          }
        };
        setBlocks([...blocks, newBlock])
      };

      const addImage = () => {
        const newBlock = {
          id: blocks.length + 1,
          order: blocks.length + 1,
          type: "image",
          element: Image,
          data: {
              url: "https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_GB_wbg.png",
              alt: "Packets logo",
          },
          style: {
              img: {
                  width: 200,
              }
          }
        };
        setBlocks([...blocks, newBlock])
      };

    return (
        <div className='Toolbar'>
            <button onClick={addHeader}>+ Header</button>
            <button onClick={addParagraph}>+ Paragraph</button>
            <button onClick={addButton}>+ Button</button>
            <button onClick={addImage}>+ Image</button>
        </div>
    );
}

export default Toolbar;
