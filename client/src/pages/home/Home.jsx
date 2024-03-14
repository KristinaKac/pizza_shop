import React, { useEffect } from 'react';
import css from './Home.module.css';
import CarouselMain from '../../components/carousel/CarouselMain';
import BestProducts from '../../components/bestProducts/BestProducts';
import AboutUs from '../../components/aboutUs/AboutUs';


const Home = () => {

    

    return (
        <section className={css.home_page}>
            <CarouselMain />

            <div className={css.home_main}>
                <BestProducts />
                <AboutUs />


            </div>
        </section>

    )
}
export default Home;