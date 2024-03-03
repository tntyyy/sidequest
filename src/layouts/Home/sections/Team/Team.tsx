import {useCallback, useState} from 'react';
import {Swiper, SwiperProps, SwiperSlide} from 'swiper/react';
import styles from './Team.module.scss';
import "swiper/scss";
import "swiper/scss/pagination";
import {teamData} from '@/src/layouts/Home/sections/Team/Team.data';
import TeamItem from '@/src/layouts/Home/sections/Team/components/TeamItem';
import PixelArrow from '@/src/components/ui/PixelArrow/PixelArrow';
import classNames from 'classnames';

const Team = () => {
    const [swiper, setSwiper] = useState<
        Parameters<NonNullable<SwiperProps["onSwiper"]>>[0] | null
    >(null);

    const [swiperWidth, setSwiperWidth] = useState(swiper?.width ?? 0);

    const onSwiperResizeHandler = useCallback<
        NonNullable<SwiperProps["onResize"]>
    >((swiper) => {
        setSwiperWidth(swiper.width);
    }, []);

    const onSwiperInitHandler = useCallback<
        NonNullable<SwiperProps["onResize"]>
    >(
        (swiper) => {
            onSwiperResizeHandler(swiper);
            setSwiper(swiper);
        },
        [onSwiperResizeHandler]
    );

    const handleOnPrevButtonClick = useCallback(
        () => swiper?.slidePrev(),
        [swiper]
    );

    const handleOnNextButtonClick = useCallback(
        () => swiper?.slideNext(),
        [swiper]
    );

    return (
        <section className={styles.wrapper}>
            <div className={styles.slider}>
                <Swiper
                    onSwiper={onSwiperInitHandler}
                    slidesPerView={'auto'}
                    spaceBetween={32}
                    tag="div"
                    preventInteractionOnTransition={true}
                    watchSlidesProgress={true}
                    onResize={onSwiperResizeHandler}
                    breakpoints={{
                        1380: {
                           slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {
                        teamData.map((item) => {
                            return (
                                <SwiperSlide
                                    key={item.name}
                                    className={styles.slide}
                                >
                                    <TeamItem {...item} />
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </div>
            <div className={styles.nav}>
                <div className={styles.nav__content}>
                    <p className={styles.nav__title}>
                        The team
                    </p>
                    <div className={styles.nav__btns}>
                        <button onClick={handleOnPrevButtonClick} className={classNames(styles.btn, styles.btn__prev)}>
                            <PixelArrow/>
                        </button>
                        <button onClick={handleOnNextButtonClick} className={classNames(styles.btn, styles.btn__next)}>
                            <PixelArrow/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;