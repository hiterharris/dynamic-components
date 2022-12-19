import { Header, Paragraph, Image } from '../components';
import Button from '@mui/material/Button';

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
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'black',
            color: 'white',
            overflow: 'hidden',
        }
    },
    blocks: [
        {
            id: 1,
            order: 1,
            type: "header",
            element: Header,
            data: {
                text: "Hello world",
                level: 2,
            },
            style: {
                color: 'blue'
            }
        },
        {
            id: 2,
            type: 'paragraph',
            order: 2,
            element: Paragraph,
            data: {
                text: 'Paragraph'
            },
            style: {
                color: 'red'
            }
        },
        {
            id: 3,
            type: 'button',
            order: 3,
            element: Button,
            data: {
                text: 'Click Me!',
                variant: 'contained'
            },
            style: {
                backgroundColor: 'green'
            }
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
            style: {
                img: {
                    width: 200,
                }
            }
        },
    ],
  };
