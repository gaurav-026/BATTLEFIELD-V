import React from 'react'

const Card4 = ({ img, text1, text2 }) => {


    return (
        <div className="w-[250px] h-[320px] group overflow-hidden relative" >
            <img
                src={img}
                alt="img1"
                className="transition-all duration-300 ease-in-out w-full group-hover:h-[100px]"
                style={{ height: "200px", objectFit: "cover", display: "block" }}
            />
            <div className="h-[120px] p-4 bg-black bg-opacity-40 flex flex-col justify-between absolute bottom-0 left-0 right-0 group-hover:bg-white group-hover:text-black transition-all duration-300">
                <div className="flex flex-col text-xl font-semibold">
                    <p>{text1}</p>
                    <p className="text-white text-opacity-50 text-xs  group-hover:text-black hover:text-opacity-20">
                        {text2}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card4
