import classNames from 'classnames';
import {Montserrat, Noto_Sans} from 'next/font/google';
import localFont from 'next/font/local';
import Market from '@/src/layouts/Market/Market';

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

const MarketPage = () => {
    return (
        <div className={classNames(montFont.className, pixeloid.variable, notoFont.variable )}>
            <Market />
        </div>
    );
}

export default MarketPage;