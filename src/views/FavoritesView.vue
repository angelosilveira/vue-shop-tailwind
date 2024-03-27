<script>
// import { useRecoilValue } from 'vue-recoil';
import HeadingComponent from '@/components/Heading/HeadingComponent.vue'
import ProductComponent from '@/components/Products/ProductComponent.vue'

// import { favoritesAtom } from '../recoil/atom/product';

export default {
  components: {
    HeadingComponent,
    ProductComponent
  },
  setup() {
    const productsFavorites = []

    return {
      productsFavorites
    }
  }
}
</script>

<template>
  <div class="w-full py-16">
    <div class="max-w-container px-4">
      <HeadingComponent :heading="'Lista de Favoritos'" />
      <div
        v-if="productsFavorites.length > 0"
        class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-20"
      >
        <div v-for="product in productsFavorites" :key="product.id" class="px-2">
          <ProductComponent
            :id="product.id"
            :title="product.title"
            :image="product.image"
            :price="product.price"
            :category="product.category"
          />
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
            <h1 class="font-titleFont text-xl font-bold uppercase text-center">
              SUA LISTA DE FAVORITOS ESTÁ VAZIA
            </h1>
            <p class="text-sm text-center px-10 -mt-2">
              Sua lista de favoritos está aqui para te ajudar. Dê a ela um propósito - encha-o com
              livros, eletrônicos, vídeos, etc. e a faça feliz.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
