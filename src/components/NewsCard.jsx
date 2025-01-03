import React from 'react'
import { IoPlayCircleOutline } from "react-icons/io5";

const NewsCard = ({ img, show, text1, text2, category }) => {
    return (
        <div className="h-[200px] group overflow-hidden relative w-fit">
          <img
            src={img}
            alt="img1"
            className="transition-all duration-300 ease-in-out w-fit group-hover:h-[100px]"
            style={{ height: "200px", objectFit: "cover", display: "block" }}
          />
          {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80"></div>
          <div
            className="bg-white h-[2px] absolute bottom-0 left-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          ></div>
          {show && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <IoPlayCircleOutline size={40} />
                </div>
            )}
          <div className="absolute bottom-2 left-2 flex flex-col font-semibold">
            <p className="text-white text-opacity-50 ">
              {category}
            </p>
            <p>{text1}</p>
            <p>{text2}</p>
          </div>
        </div>

    )
}

export default NewsCard
