import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

type Props = {
  onClick?: () => void
}

export const SampleNextArrow = ({ onClick }: Props) => {
  return (
    <div
      class="w-14 h-14 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center z-10 absolute top-[35%] right-2"
      onClick={onClick}
    >
      <span class="text-xl">
        <FaLongArrowAltRight />
      </span>
    </div>
  )
}
