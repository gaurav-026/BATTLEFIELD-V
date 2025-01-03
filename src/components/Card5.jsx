import React from 'react'

const Card5 = ({ img, text1, text2 }) => {


    return (
        <div className="w-[220px] h-[130px] group overflow-hidden relative flex-col" >
            <img
                src={img}
                alt="img1"
                className="transition-all duration-300 ease-in-out "
                style={{ height: "", objectFit: "cover", display: "block" }}
            />
            <div className="h-[80px] p-2 bg-black bg-opacity-70 flex flex-col justify-between group-hover:bg-white group-hover:text-black transition-all duration-300">
                <div className="flex flex-col text-xl font-semibold">
                    <p>{text1}</p>
                    <p className="font-semibold text-sm  group-hover:text-black hover:text-opacity-20">
                        {text2}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card5
