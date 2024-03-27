<script>
import { Icon } from '@iconify/vue'
// import { useSetRecoilState } from 'vue-recoil';
// import { cartAtom, increaseQuantity, decreaseQuantity, deleteItem } from '@recoil/atom/cart';

export default {
  components: {
    Icon
  },
  props: {
    product: Object
  },
  setup(props) {
    const setCart = useSetRecoilState(cartAtom)

    const handleIncreaseQuantity = (productId) => {
      // setCart(increaseQuantity(productId));
      return
    }

    const handleDecreaseQuantity = (productId) => {
      // setCart(decreaseQuantity(productId));
      return
    }

    const handleDeleteItem = (productId) => {
      // setCart(deleteItem(productId));
      return
    }

    return {
      handleIncreaseQuantity,
      handleDecreaseQuantity,
      handleDeleteItem,
      props
    }
  }
}
</script>

<template>
  <div class="w-full grid grid-cols-5 mb-4 border py-2">
    <div class="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
      <Icon
        icon="mdi:close-circle"
        @click="handleDeleteItem(product.id)"
        class="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
      />
      <img class="w-32 h-32" :src="product.image" alt="productImage" />
      <h1 class="font-titleFont font-semibold text-base">{{ product.title }}</h1>
    </div>
    <div
      class="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0"
    >
      <div class="flex w-1/3 items-center text-lg font-semibold">${{ product.price }}</div>
      <div class="w-1/3 flex items-center gap-6 text-lg">
        <span
          @click="handleDecreaseQuantity(product.id)"
          class="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
        >
          -
        </span>
        <p>{{ product.quantity }}</p>
        <span
          @click="handleIncreaseQuantity(product.id)"
          class="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
        >
          +
        </span>
      </div>
      <div class="w-1/3 flex items-center font-titleFont font-bold text-lg">
        <p>${{ product.quantity * product.price }}</p>
      </div>
    </div>
  </div>
</template>
