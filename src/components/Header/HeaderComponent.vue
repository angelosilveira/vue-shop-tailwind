<script>
import { ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'

import logo from '@/assets/images/logo.png'
import { navBarList } from '@/utils/constants'

export default {
  components: {
    Icon
  },
  setup() {
    const showMenu = ref(true)
    const sidenav = ref(false)
    const route = useRoute()

    const handleResize = () => {
      showMenu.value = window.innerWidth >= 667
    }

    const setSidenav = (value) => {
      sidenav.value = value
    }

    onMounted(() => {
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    })

    return {
      showMenu,
      sidenav,
      setSidenav,
      logo,
      navBarList,
      route
    }
  }
}
</script>

<template>
  <div class="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
    <nav class="h-full px-4 max-w-container mx-auto relative">
      <div class="flex items-center justify-between h-full">
        <router-link to="/">
          <div>
            <img class="w-32 object-cover" :src="logo" />
          </div>
        </router-link>
        <div>
          <template v-if="showMenu">
            <ul v-if="showMenu" class="flex items-center w-auto z-50 p-0 gap-2">
              <li v-for="item in navBarList" :key="item._id">
                <router-link
                  class="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                  :to="item.link"
                  :state="{ data: $route.path.split('/')[1] }"
                >
                  {{ item.title }}
                </router-link>
              </li>
            </ul>
          </template>
          <Icon
            icon="mdi-menu"
            @click="setSidenav(!sidenav)"
            class="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
          />
          <div
            v-if="sidenav"
            class="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50"
          >
            <div class="w-[80%] h-full relative">
              <div class="w-full h-full bg-primeColor p-6">
                <ul class="text-gray-200 flex flex-col gap-2">
                  <li v-for="item in navBarList" :key="item._id">
                    <router-link
                      :to="item.link"
                      :state="{ data: $route.path.split('/')[1] }"
                      @click="setSidenav(false)"
                      class="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                    >
                      {{ item.title }}
                    </router-link>
                  </li>
                </ul>
              </div>
              <span
                @click="setSidenav(false)"
                class="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
              >
                <Icon icon="mdi-close" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
