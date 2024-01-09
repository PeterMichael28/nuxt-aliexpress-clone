<template>
    <MainLayout>
        <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2"> 
            <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
                <div v-if="products" v-for="product in products" :key="product">
                    <ProductComponent :product="product"/>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue'


let products = [];
for (let i = 0; i < 10; i++) {
   let product = {
       id: i + 1, // assuming ids start from 1
       title: `Product ${i + 1}`,
       description: `Description for Product ${i + 1}`,
       url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6CmNjCyjmLxpDzaYTrneBOLu1_MgKeMjgcg&usqp=CAU`,
       price: 100 // random price between 0 and 100
   };
   products.push(product);
}
// products = productsArr
</script>
