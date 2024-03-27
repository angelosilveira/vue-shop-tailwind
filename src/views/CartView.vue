<script>
import { ref, computed, watchEffect } from 'vue'
// import { useRecoilState } from 'recoil'
// import { cartAtom, resetCart } from '@recoil/atom/cart'
import ItemCardComponent from '@/components/ItemCard/ItemCardComponent.vue'

export default {
  components: {
    ItemCardComponent
  },
  setup() {
    // const [products, setCart] = useRecoilState(cartAtom)
    const products = ref([])
    const totalAmt = ref(0)

    watchEffect(() => {
      // const price = products.value.reduce((acc, item) => {
      //   return acc + item.price * (item.quantity || 1)
      // }, 0)
      // const formattedPrice = parseFloat(price.toFixed(2))
      totalAmt.value = 0
    })

    const clearCart = () => {
      // setCart(resetCart())
      return
    }

    return {
      products,
      totalAmt,
      clearCart
    }
  }
}
</script>

<template>
  <div class="max-w-container mx-auto py-10 px-4">
    <div v-if="products.length > 0" class="pb-20">
      <div
        class="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold"
      >
        <h2 class="col-span-2">Produto</h2>
        <h2>Preço</h2>
        <h2>Quantidade</h2>
        <h2>Sub Total</h2>
      </div>
      <div class="mt-5">
        <div v-for="product in products" :key="product.id">
          <ItemCardComponent :product="product" />
        </div>
      </div>

      <button
        @click="clearCart"
        class="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
      >
        Resetar carrinho
      </button>

      <div class="max-w-7xl gap-4 flex justify-end mt-4">
        <div class="w-96 flex flex-col gap-4">
          <h1 class="text-2xl font-semibold text-right">Total do Carrinho</h1>
          <div>
            <p
              class="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium"
            >
              Total
              <span class="font-bold tracking-wide text-lg font-titleFont"> ${{ totalAmt }} </span>
            </p>
          </div>
          <div class="flex justify-end">
            <router-link to="#">
              <button class="h-10 bg-primeColor text-white hover:bg-black duration-300">
                IR PARA O PAGAMENTO
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20">
        <div>
          <img
            class="w-80 rounded-lg p-4 mx-auto"
            src="@/assets/images/emptyCart.png"
            alt="emptyCart"
          />
        </div>
        <div
          class="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg"
        >
          <h1 class="font-titleFont text-xl font-bold uppercase">
            SEU CARRINHO DE COMPRAS SE SENTE SOLITÁRIO.
          </h1>
          <p class="text-sm text-center px-10 -mt-2">
            Seu carrinho de compras vive para servir. Dê a ele um propósito - encha-o com livros,
            eletrônicos, vídeos, etc. e o faça feliz.
          </p>
          <router-link to="/shop">
            <button
              class="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300"
            >
              Continue comprando
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
