<script>
import { ref, onMounted } from 'vue'
import ProductInfoComponent from '@/components/ProductInfo/ProductInfoComponent.vue'
import { getProduct } from '@/services/product'
import { useRoute } from 'vue-router'

export default {
  components: {
    ProductInfoComponent
  },
  setup() {
    const route = useRoute()
    const id = ref(route.params.id)
    const product = ref({ image: '', title: '' })
    const activeTab = ref('info')

    const tabs = [
      {
        id: 'info',
        label: 'Ficha Técnica',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.'
      },
      {
        id: 'description',
        label: 'Descrição',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.'
      }
    ]

    const handleTabClick = (tabId) => {
      activeTab.value = tabId
    }

    const loadProduct = async () => {
      try {
        const response = await getProduct(Number(id.value))
        product.value = response
      } catch (err) {
        console.log('🚀 ~ loadProducts ~ err:', err)
      }
    }

    onMounted(() => {
      loadProduct()
    })

    return {
      product,
      activeTab,
      tabs,
      handleTabClick
    }
  }
}
</script>

<template>
  <div class="w-full mx-auto border-b-[1px] border-b-gray-300 py-20">
    <div class="max-w-container mx-auto px-4">
      <div
        class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4"
      >
        <div class="h-full xl:col-span-2">
          <img class="w-full h-full" :src="product.image" :alt="product.title" />
        </div>
        <div
          class="h-full w-full md:col-span-2 xl:col-span-4 xl:px-4 flex flex-col gap-6 justify-center"
        >
          <ProductInfoComponent :product="product" />
        </div>
      </div>
      <div>
        <div class="space-x-4 pt-4">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="py-2 px-4 focus:outline-none"
            :class="{
              'bg-blue-500 text-white': activeTab === tab.id,
              'bg-gray-200 text-gray-800': activeTab !== tab.id
            }"
            @click="handleTabClick(tab.id)"
          >
            {{ tab.label }}
          </button>
        </div>
        <div class="my-4">
          <div v-for="tab in tabs" :key="tab.id" :class="{ hidden: activeTab !== tab.id }">
            <p>{{ tab.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
