<script>
import { ref, onMounted } from 'vue'
import HeadingComponent from '@/components/Heading/HeadingComponent.vue'
import ProductComponent from '@/components/Products/ProductComponent.vue'
import { getAllProducts } from '@/services/product'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

// import { productListAtom } from '@/recoil/atom/product'

export default {
  components: {
    HeadingComponent,
    ProductComponent,
    Swiper,
    SwiperSlide
  },
  setup() {
    const products = ref([])
    const heading = 'Novos Produtos'

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: '<SampleNextArrow />',
      prevArrow: '<SamplePrevArrow />',
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    }

    const loadProducts = async () => {
      try {
        const response = await getAllProducts()
        products.value = response
      } catch (err) {
        console.log('🚀 ~ loadProducts ~ err:', err)
      }
    }

    onMounted(loadProducts)

    return {
      products,
      heading,
      settings,
      modules: [Navigation]
    }
  }
}
</script>

<template>
  <div class="w-full py-16">
    <div class="max-w-container px-4">
      <HeadingComponent :heading="heading" />

      <swiper
        :slides-per-view="3"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :navigation="true"
        :modules="modules"
      >
        <swiper-slide v-for="product in products" :key="product.id" class="px-2">
          <ProductComponent :product="product" />
        </swiper-slide>
      </swiper>
      <!-- <Slider :options="settings">
        <div v-for="product in products" :key="product.id" class="px-2">
          <Product :product="product" />
        </div>
      </Slider> -->
    </div>
  </div>
</template>
