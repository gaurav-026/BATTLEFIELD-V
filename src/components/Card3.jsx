import React from 'react'

const Card3 = ({ img, show, text1, category, videoUrl }) => {
    return (
        <div className="w-[150px] h-[200px] group overflow-hidden relative">
            <img
                src={img}
                alt="Thumbnail"
                className="transition-all duration-300 ease-in-out w-full h-full object-cover"
            />

            {/* YouTube Video Overlay */}
            {show && (
                <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
                    <iframe
                        src= {videoUrl}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="encrypted-media"
                        allowFullScreen
                        title="YouTube Video"
                    ></iframe>
                </div>
            )}


            <div className="absolute bottom-2 left-2 flex flex-col text-sm font-semibold">
                <p className="text-white text-opacity-50 ">
                    {category}
                </p>
                <p>{text1}</p>
            </div>
        </div>

    )
}

export default Card3
