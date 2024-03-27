import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ProductType } from '@/interfaces/Product'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<ProductType[]>([])

  function addToCart(product: ProductType): void {
    const foundIndex = cart.value.findIndex((x) => x.id === product.id)

    if (foundIndex >= 0) {
      // Produto encontrado, aumenta a quantidade
      cart.value = cart.value.map((item, index) =>
        index === foundIndex ? { ...item, quantity: (item.quantity || 0) + 1 } : item
      )
    } else {
      // Produto não encontrado, adiciona ao carrinho com quantidade inicial de 1
      cart.value.push({ ...product, quantity: 1 })
    }
  }

  function increaseQuantity(productId: number): void {
    cart.value = cart.value.map((item) => {
      if (item.id === productId) {
        // Aumenta a quantidade
        return { ...item, quantity: (item.quantity || 0) + 1 }
      }
      return item
    })
  }

  function decreaseQuantity(productId: number): void {
    cart.value = cart.value.map((item) => {
      if (item.id === productId) {
        // Diminui a quantidade, mas garante que não seja menor que 1
        return { ...item, quantity: Math.max((item.quantity || 0) - 1, 1) }
      }
      return item
    })
  }

  function deleteItem(productId: number): void {
    // Filtra todos os itens exceto o que será excluído
    cart.value = cart.value.filter((item) => item.id !== productId)
  }

  function resetCart(): void {
    cart.value = [] // Limpa o carrinho
    console.log('resetou', cart.value)
  }

  return {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteItem,
    resetCart
  }
})
