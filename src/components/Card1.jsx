import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'

const Card1 = ({img, text1, text2, text3, category}) => {
  return (
        <div className="w-[300px] h-[200px] group overflow-hidden relative">
          <img
            src={img}
            alt="img1"
            className="transition-all duration-300 ease-in-out w-full group-hover:h-[100px]"
            style={{ height: "120px", objectFit: "cover", display: "block" }}
          />
          <div className="absolute top-24 left-2 flex flex-col text-sm font-semibold">
                <p className="text-white text-xs text-opacity-80 ">
                    {category}
                </p>
            </div>
          <div className="p-2 bg-black bg-opacity-40 flex flex-col justify-between absolute bottom-0 left-0 right-0 hover:bg-white hover:text-black transition-all duration-300">
            <div className="flex flex-col text-xs font-semibold">
              <p>{text1}</p>
              <p>{text2}</p>
              <p className="text-white text-opacity-50 group-hover:text-black hover:text-opacity-20">
                {text3}
              </p>
            </div>
            <span className="flex justify-end">
              <HiDotsHorizontal />
            </span>
            <span className="flex justify-center border-2 border-black rounded-sm border-opacity-20 text-xs hidden group-hover:flex text-center">
              QUICK MATCH
            </span>
          </div>
        </div>
  )
}

export default Card1
