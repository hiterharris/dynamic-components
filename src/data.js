import Header from './components/Header';
import Paragraph from './components/Paragraph';
import Image from './components/Image';

export const data = [
    {
        id: 1,
        type: 'header',
        element: Header,
        data: {
            text: 'Header'
        }
    },
    {
        id: 2,
        type: 'paragraph',
        element: Paragraph,
        data: {
            text: 'Paragraph'
        }
    },
    {
        id: 3,
        type: 'image',
        element: Image,
        data: {
            src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.stackshare.io%2Fservice%2F11114%2Feditor.png&f=1&nofb=1&ipt=fa041a2c4d647903606759f99e51ca2a5708658532a51f1dbccbd635a7e9d20c&ipo=images',
            alt: 'editorjs',
            style: {
                height: '100px',
                width: '100px'
            }
        }
    }
]