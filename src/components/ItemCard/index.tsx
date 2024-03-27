import React from 'react'
import { ImCross } from 'react-icons/im'
// import {
//   deleteItem,
//   drecreaseQuantity,
//   increaseQuantity,
// } from "@redux/orebiSlice";
import { ProductType } from '@interfaces/Product'
import { cartAtom, increaseQuantity, decreaseQuantity, deleteItem } from '@recoil/atom/cart'
import { useSetRecoilState } from 'recoil'

type Props = {
  product: ProductType
}

export const ItemCard = ({ product }: Props) => {
  const setCart = useSetRecoilState(cartAtom)

  const handleIncreaseQuantity = (productId: number) => {
    setCart(increaseQuantity(productId))
  }

  const handleDecreaseQuantity = (productId: number) => {
    setCart(decreaseQuantity(productId))
  }

  const handleDeleteItem = (productId: number) => {
    setCart(deleteItem(productId))
  }

  return (
    <div class="w-full grid grid-cols-5 mb-4 border py-2">
      <div class="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
        <ImCross
          onClick={() => handleDeleteItem(product.id)}
          class="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
        />
        <img class="w-32 h-32" src={product.image} alt="productImage" />
        <h1 class="font-titleFont font-semibold text-base">{product.title}</h1>
      </div>
      <div class="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
        <div class="flex w-1/3 items-center text-lg font-semibold">${product.price}</div>
        <div class="w-1/3 flex items-center gap-6 text-lg">
          <span
            onClick={() => handleDecreaseQuantity(product.id)}
            class="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
          >
            -
          </span>
          <p>{product.quantity}</p>
          <span
            onClick={() => handleIncreaseQuantity(product.id)}
            class="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
          >
            +
          </span>
        </div>
        <div class="w-1/3 flex items-center font-titleFont font-bold text-lg">
          <p>${product.quantity! * product.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
