import {Montserrat, Noto_Sans} from 'next/font/google';
import Home from '@/src/layouts/Home/Home';
import localFont from 'next/font/local'
import classNames from 'classnames';

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


const Index = () => {
  return (
      <div className={classNames(montFont.className, pixeloid.variable, notoFont.variable )}>
        <Home />
      </div>
  );
}

export default Index;
