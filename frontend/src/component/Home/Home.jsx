import React from "react";
import "./Home.css"
import MultiItemCarousel from './MultiItemCarousel';


const Home = () => {

    return (
        <div className="">
            <section className="banner -z-50 relative flex flex-col justify-center items-center">
                
                <div className="w-[50vw] z-10 text-center">
                    <p className="text-2xl lg:text-6xl font-bold z-10 py-5  text-gray-300">San Food</p>
                    <p className="z-10 text-gray-300 text-xl lg:text-4xl">Taste the 
                    Covenience: Food, Fast and Delivered. </p>
                </div>
            </section>
            <section>
                <MultiItemCarousel/>
            </section>
        </div>
    )
}

export default Home 
