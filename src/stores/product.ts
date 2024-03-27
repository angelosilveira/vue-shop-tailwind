import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ProductType } from '@/interfaces/Product'

export const useProductStore = defineStore('product', () => {
  const productList = ref([]) // Inicializa como um array vazio
  const favorites = ref<ProductType[]>([]) // Inicializa como um array vazio

  function toggleFavorite(product: ProductType) {
    const index = favorites.value.findIndex((fav) => fav.id === product.id)
    if (index >= 0) {
      // Remove o produto dos favoritos
      favorites.value.splice(index, 1)
    } else {
      // Adiciona o produto aos favoritos
      favorites.value.push(product)
    }
  }

  return {
    productList,
    favorites,
    toggleFavorite
  }
})
