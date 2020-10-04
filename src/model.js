import image from './assets/img.jpg'
import { TextBlock, TitleBlock, ImageBlock, ColumnsBlock } from './classes/blocks'

const text = `Lorem Ipsum is simply dummy text of the printing and 
typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown 
printer took a galley of type and scrambled it to make a 
type specimen book. It has survived not only five centuries, 
but also the leap into electronic typesetting, remaining 
essentially unchanged. It was popularised in the 1960s 
with the release of Letraset sheets containing Lorem Ipsum 
passages, and more recently with desktop publishing software 
like Aldus PageMaker including versions of Lorem Ipsum.`

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock (image, {
        styles: {
            padding: '2rem 0',
            dispay: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }),
    new ColumnsBlock([
        'Продажа яблок',
        'Покупка груш',
        'Посадка саженцев',
        'Срубка деревьев'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '2rem',
            'font-weight': 'bold'
        }
    })
]