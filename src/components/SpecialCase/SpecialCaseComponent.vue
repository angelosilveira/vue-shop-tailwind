<script>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
// import { cartAtom } from '@recoil/atom/cart'
// import { useRecoilValue } from 'recoil'
// import { favoritesAtom } from '@recoil/atom/product'

export default {
  setup() {
    const cart = []
    const favoritesTotal = []

    return {
      cart,
      favoritesTotal
    }
  },
  components: {
    Icon
  }
}
</script>

<template>
  <div class="fixed top-52 right-2 z-20 hidden md:flex flex-col gap-2">
    <router-link to="/favorites">
      <div
        class="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative"
      >
        <div class="flex justify-center items-center">
          <Icon
            icon="mdi:favorite-border"
            class="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200"
          />

          <Icon
            icon="mdi:favorite-border"
            class="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200"
          />
        </div>
        <p class="text-xs font-semibold font-titleFont">Favoritos</p>
        <p
          v-if="favoritesTotal.length > 0"
          class="absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold"
        >
          {{ favoritesTotal.length }}
        </p>
      </div>
    </router-link>

    <router-link to="/cart">
      <div
        class="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative"
      >
        <div class="flex justify-center items-center">
          <Icon
            icon="mdi:shopping-cart"
            class="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200"
          />

          <Icon
            icon="mdi:shopping-cart"
            class="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200"
          />
        </div>
        <p class="text-xs font-semibold font-titleFont">Carrinho</p>
        <p
          v-if="cart.length > 0"
          class="absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold"
        >
          {{ cart.length }}
        </p>
      </div>
    </router-link>
  </div>
</template>
