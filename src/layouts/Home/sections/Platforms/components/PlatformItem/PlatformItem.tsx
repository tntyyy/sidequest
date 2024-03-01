import styles from './PlatformItem.module.scss';
import Link from 'next/link';

const PlatformItem = ({href, text}: { href: string, text: string }) => {
    return (
        <Link
            href={href}
            className={styles.list__item}
        >
            <svg width="120" height="44" viewBox="0 0 120 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_538_232)">
                    <path
                        d="M4.58716 6.18519V24.6422C4.58716 17.6374 42.8135 7.29541 61.9266 3H13.0584C8.37988 3 4.58716 4.42606 4.58716 6.18519Z"
                        fill="url(#paint0_linear_538_232)"/>
                </g>
                <g filter="url(#filter1_f_538_232)">
                    <path
                        d="M117.797 32C118.807 39.2853 114.164 40.1959 98.6238 39.2853C105.747 39.408 114.871 36.8417 117.797 32Z"
                        fill="#F2FFF4"/>
                </g>
                <g filter="url(#filter2_f_538_232)">
                    <path
                        d="M64.9025 34.2406C82.0935 34.2406 96.0296 29.0006 96.0296 22.5368C96.0296 16.073 82.0935 10.833 64.9025 10.833C47.7115 10.833 33.7754 16.073 33.7754 22.5368C33.7754 29.0006 47.7115 34.2406 64.9025 34.2406Z"
                        fill="#FFD100"/>
                </g>
                <defs>
                    <filter id="filter0_f_538_232" x="-0.877743" y="-2.4649" width="68.2692" height="32.572"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="2.73245" result="effect1_foregroundBlur_538_232"/>
                    </filter>
                    <filter id="filter1_f_538_232" x="96.9423" y="30.3185" width="22.6684" height="10.9397"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="0.840753" result="effect1_foregroundBlur_538_232"/>
                    </filter>
                    <filter id="filter2_f_538_232" x="19.903" y="-3.0394" width="89.999" height="51.1524"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="6.9362" result="effect1_foregroundBlur_538_232"/>
                    </filter>
                    <linearGradient id="paint0_linear_538_232" x1="11.3733" y1="4.97615" x2="20.0671" y2="26.5392"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="1" stopColor="#A7FFCA" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>


            <span>{text}</span>
        </Link>
    );
};

export default PlatformItem;