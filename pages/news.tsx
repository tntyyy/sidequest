import WhitePaper from '@/src/layouts/News/News';
import classNames from 'classnames';
import {Montserrat, Noto_Sans} from 'next/font/google';
import localFont from 'next/font/local';

const notoFont = Noto_Sans({ subsets: ["latin"], variable: '--font-noto' });
const montFont = Montserrat({ subsets: ["latin"], variable: '--font-mont' });
const pixeloid = localFont({
    src: [
        {
            path: '../public/fonts/PixeloidSans.ttf',
            weight: '400'
        },
        {
            path: '../public/fonts/PixeloidSans-Bold.ttf',
            weight: '700'
        }
    ],
    variable: '--font-pixel'
})

const NewsPage = () => {
    return (
        <div className={classNames(montFont.className, pixeloid.variable, notoFont.variable )}>
            <WhitePaper />
        </div>
    );
}

export default NewsPage;