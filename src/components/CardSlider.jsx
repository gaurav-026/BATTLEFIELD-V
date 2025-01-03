import React, { useRef } from 'react'

const CardSlider = ({ cards }) => {

    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };
    return (
        <div className="relative overflow-hidden">
            {/* Slider Container */}
            <div
                ref={sliderRef}
                className="flex gap-2 overflow-x-hidden scroll-smooth"
            >
                {cards.map((card, index) => (
                    <div key={index} className="flex-shrink-0">
                        {card} 
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={scrollLeft}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 hover:bg-gray-700"
            >
                &larr;
            </button>
            <button
                onClick={scrollRight}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 hover:bg-gray-700"
            >
                &rarr;
            </button>
        </div>
    );
}

export default CardSlider
