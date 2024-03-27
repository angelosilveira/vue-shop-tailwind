<script setup lang="ts">
import { RouterView } from 'vue-router'

import './index.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'vue3-toastify/dist/index.css'

import HeaderComponent from '@/components/Header/HeaderComponent.vue'
import SpecialCaseComponent from '@/components/SpecialCase/SpecialCaseComponent.vue'
</script>

<template>
  <div>
    <HeaderComponent />
    <SpecialCaseComponent />
    <RouterView />
  </div>
</template>
