import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Image from '../components/Image/Image';
import Button from '@mui/material/Button';
import TestComponent from '../components/TestComponent/TestComponent'

export const siteData = {
    siteId: 1,
    createdAt: 1587670998983,
    createdBy: 'Hiter',
    permisions: {
        editors: ['Hiter', 'Malcolm', 'Joe'],
        viewers: ['Connor', 'Devon']
    },
    pageBody: {
        style: {
            display: 'flex',
            flexDirection: 'column',
            alignItem: 'center',
            backgroundColor: 'black',
            color: 'white',
            overflow: 'hidden',
        }
    },
    blocks: [
        {
            id: 0,
            order: 0,
            type: "component",
            element: TestComponent,
            data: {
                text: "TestComponent",
            },
            style: {
                color: 'blue'
            }
        },
        {
            id: 1,
            order: 1,
            type: "header",
            element: Header,
            data: {
                text: "Hello world",
                level: 2,
            },
            style: {}
        },
        {
            id: 2,
            type: 'paragraph',
            order: 2,
            element: Paragraph,
            data: {
                text: 'Paragraph'
            },
            style: {}
        },
        {
            id: 3,
            type: 'button',
            order: 3,
            element: Button,
            data: {
                text: 'Button',
                variant: 'contained'
            },
            style: {}
        },
        {
            id: 4,
            type: "image",
            order: 4,
            element: Image,
            data: {
                url: "https://s.yimg.com/cv/apiv2/default/nfl/20190724/500x500/2019_GB_wbg.png",
                alt: "Packets logo",
            },
            style: {}
        },
    ],
  };
