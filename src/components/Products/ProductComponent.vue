<script>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { toast } from 'vue3-toastify'
// import { useAddToCart } from '@recoil/atom/cart'
// import { favoritesAtom, useToggleFavorite } from '@recoil/atom/product'
// import { useRecoilValue } from 'recoil'
import { Icon } from '@iconify/vue'

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
    // const route = useRoute()
    // const toast = useToast()
    // const addToCart = useAddToCart()
    // const toggleFavorite = useToggleFavorite()
    // const favoritesTotal = useRecoilValue(favoritesAtom)

    // const handleAddToCart = () => {
    //   addToCart({
    //     id: props.id,
    //     title: props.title,
    //     image: props.image,
    //     price: props.price,
    //     category: props.category,
    //     quantity: 1
    //   })
    //   toast.success('Produto adicionado ao carrinho')
    // }

    // const handleToggleFavorite = () => {
    //   toggleFavorite({
    //     id: props.id,
    //     title: props.title,
    //     image: props.image,
    //     price: props.price,
    //     category: props.category
    //   })
    //   toast.success('Produto favoritado')
    // }

    // const handleProductDetails = () => {
    //   route.push(`/product/${props.id}`)
    // }

    const isFavorite = computed(() => {
      return true
    })

    return {
      // handleAddToCart,
      // handleToggleFavorite,
      // handleProductDetails,
      props,
      isFavorite
    }
  }
}
</script>

<template>
  <div class="w-full relative group">
    <div class="max-w-80 max-h-80 relative overflow-y-hidden">
      <div @click="handleProductDetails">
        <img class="w-full h-full max-h-[165px] object-contain" :src="product.image" />
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
    <div class="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
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
