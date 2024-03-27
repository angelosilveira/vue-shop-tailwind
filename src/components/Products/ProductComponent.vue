<script>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { toast } from 'vue3-toastify'
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/product'
import { useCartStore } from '@/stores/cart'

export default {
  props: {
    product: {
      id: String,
      title: String,
      image: String,
      price: Number,
      category: String
    }
  },
  components: {
    Icon
  },
  setup(props) {
    const route = useRouter()

    const productStore = useProductStore()
    const cartStore = useCartStore()

    const favorites = productStore.favorites

    const handleAddToCart = () => {
      cartStore.addToCart({
        ...props.product,
        quantity: 1
      })
      toast('Produto adicionado ao carrinho', {
        autoClose: 2000
      })
    }

    const handleToggleFavorite = () => {
      productStore.toggleFavorite(props.product)
      toast('Produto adicionado aos favoritos', {
        autoClose: 2000
      })
    }

    const handleProductDetails = () => {
      route.push(`/product/${props.product.id}`)
    }

    const isFavorite = computed(() => {
      return favorites.some((fav) => fav.id === props.product.id)
    })

    return {
      handleAddToCart,
      handleProductDetails,
      handleToggleFavorite,
      props,
      isFavorite,
      favorites
    }
  }
}
</script>

<template>
  <div class="w-full relative group">
    <div class="w-full max-h-80 relative overflow-y-hidden">
      <div @click="handleProductDetails">
        <img class="w-full h-full max-h-[165px] object-contain" :src="props.product.image" />
      </div>

      <div class="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
        <ul
          class="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r"
        >
          <li
            @click="handleAddToCart"
            class="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
          >
            Adicionar ao Carrinho
            <span>
              <Icon icon="mdi-shopping-cart" />
            </span>
          </li>
          <li
            @click="handleProductDetails"
            class="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
          >
            Ver Detalhes
            <span class="text-lg">
              <Icon icon="mdi-tag" />
            </span>
          </li>
          <li
            @click="handleToggleFavorite"
            class="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
          >
            {{ !isFavorite ? 'Adicionar aos favoritos' : 'Remover dos favoritos' }}
            <span v-if="isFavorite"><Icon icon="mdi-favorite" /></span>
            <span v-else><Icon icon="mdi-favorite-border" /></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
      <div class="flex items-center justify-between font-titleFont">
        <h2 class="text-base text-primeColor font-bold min-h-[100px]">{{ product.title }}</h2>
      </div>
      <div>
        <p class="text-[#767676] text-lg font-bold">${{ product.price }}</p>
        <p class="text-[#767676] text-[14px]">{{ product.category }}</p>
      </div>
    </div>
  </div>
</template>
