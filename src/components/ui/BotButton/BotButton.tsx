import styles from './BotButton.module.scss';
import Link from 'next/link';
import {FC} from 'react';
import classNames from 'classnames';

type BotButtonProps = {
    className?: string;
}

const BotButton: FC<BotButtonProps> = ({className}) => {
    return (
        <Link className={classNames(styles.button, className)} href={'/botlink'}>
            <svg width="149" height="56" viewBox="0 0 149 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_473_1866"  maskUnits="userSpaceOnUse" x="-5" y="0"
                      width="159" height="57">
                    <path d="M153.247 0H-4.24756V57H153.247V0Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_473_1866)">
                    <g filter="url(#filter0_d_473_1866)">
                        <path d="M149.998 0H-4.24756V55.8241H149.998V0Z" fill="#FFD100"/>
                    </g>
                    <g filter="url(#filter1_f_473_1866)">
                        <path
                            d="M135.097 41.868C136.342 50.5211 130.614 51.6027 111.437 50.5211C120.227 50.6669 131.485 47.6187 135.097 41.868Z"
                            fill="#F2FFF4"/>
                    </g>
                    <g filter="url(#filter2_f_473_1866)">
                        <path
                            d="M9.45386 10.9668V42.1361C9.45386 30.3067 76.5208 12.8417 110.054 5.58777H24.3164C16.1081 5.58777 9.45386 7.99603 9.45386 10.9668Z"
                            fill="url(#paint0_linear_473_1866)"/>
                    </g>
                    <g filter="url(#filter3_f_473_1866)">
                        <path
                            d="M75.8402 40.6697C97.0534 40.6697 114.25 34.446 114.25 26.7686C114.25 19.0912 97.0534 12.8674 75.8402 12.8674C54.6271 12.8674 37.4304 19.0912 37.4304 26.7686C37.4304 34.446 54.6271 40.6697 75.8402 40.6697Z"
                            fill="#FFD100"/>
                    </g>
                </g>
                <defs>
                    <filter id="filter0_d_473_1866" x="-15.1544" y="-11.9975" width="176.06" height="77.6378"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix"
                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-1.09068"/>
                        <feGaussianBlur stdDeviation="5.45341"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.22139 0 0 0 0 0.338182 0 0 0 0 1 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_473_1866"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_473_1866" result="shape"/>
                    </filter>
                    <filter id="filter1_f_473_1866" x="109.756" y="40.1865" width="27.1853" height="12.3622"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="0.840753" result="effect1_foregroundBlur_473_1866"/>
                    </filter>
                    <filter id="filter2_f_473_1866" x="3.98896" y="0.122867" width="111.53" height="47.4781"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="2.73245" result="effect1_foregroundBlur_473_1866"/>
                    </filter>
                    <filter id="filter3_f_473_1866" x="23.558" y="-1.00498" width="104.564" height="55.5471"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="6.9362" result="effect1_foregroundBlur_473_1866"/>
                    </filter>
                    <linearGradient id="paint0_linear_473_1866" x1="21.3599" y1="8.925" x2="35.6384" y2="45.7178"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="1" stopColor="#A7FFCA" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>


            <span>Try SideKick Bot</span>
        </Link>
    );
};

export default BotButton;