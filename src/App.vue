<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/Header/HeaderComponent.vue'
import './index.css'
import 'vue3-toastify/dist/index.css'
</script>

<template>
  <div>
    <HeaderComponent />
    <RouterView />
  </div>
</template>
