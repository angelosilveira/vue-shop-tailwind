<script>
import { toast } from 'vue3-toastify'
import { useCartStore } from '@/stores/cart'

export default {
  props: {
    product: Object
  },
  setup(props) {
    const cartStore = useCartStore()

    const handleAddToCart = () => {
      cartStore.addToCart({
        ...props.product,
        quantity: 1
      })
      toast('Produto adicionado ao carrinho', {
        autoClose: 2000
      })
    }

    return {
      props,
      handleAddToCart
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-5">
    <h2 class="text-4xl font-semibold">{{ product.title }}</h2>
    <p class="text-2xl font-semibold">{{ product.price }} Dt</p>
    <hr />
    <p class="text-base text-gray-600">{{ product.description }}</p>

    <div class="flex items-center">
      <svg
        class="w-4 h-4 text-yellow-300 ms-1 mr-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path
          d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
        />
      </svg>
      {{ product.rating ? product.rating.rate : '' }}
    </div>

    <button
      @click="handleAddToCart"
      class="w-full py-4 bg-blue-500 hover:bg-blue-600 duration-300 text-white text-lg font-titleFont"
    >
      Adicionar ao Carrinho
    </button>
    <p class="font-normal text-sm">
      <span class="text-base font-medium"> Categoria:</span> {{ product.category }}
    </p>
  </div>
</template>
