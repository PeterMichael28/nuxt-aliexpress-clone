<template>
 <div
  id="MainLayout"
  class="w-full fixed z-50"
 >
  <TopNavbar />

<BottomNavbar />
  
</div>



<Loading v-if="userStore.isLoading" />

  <div class="lg:pt-[150px] md:pt-[130px] pt-[80px]" />
  <div class="px-2 m:px-0">

    <slot />
  </div>

  <Footer v-if="!userStore.isLoading" />
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()







</script>
