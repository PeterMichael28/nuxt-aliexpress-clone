<template>
    <MainLayout>
        <div id="SuccessPage" class="mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
            <div class="bg-white w-full p-6 min-h-[150px] text-center">
                <div class="flex items-center text-xl justify-center">
                    <Icon name="clarity:success-standard-line" color="#5FCB04" size="30"/>
                    <span class="pl-4">Payment Successful</span>
                </div>
                <p class="text-sm pl-[50px] mb-10 mt-2">Thank you! We've received your payment.</p>

                <NuxtLink to="/" class=' font-bold text-white hover:bg-black/80 hover:underline transition-all bg-black py-2 px-5 rounded-lg mx-auto'>
                        Continue Shopping
                </NuxtLink> 
            </div>
        </div>
    </MainLayout>
    
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()

onMounted(() => {
    setTimeout(() => userStore.isLoading = false, 300)
})
</script>
