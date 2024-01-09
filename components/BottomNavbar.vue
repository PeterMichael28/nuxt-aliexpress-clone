<template>
      <div
   id="MainHeader"
   class="flex items-center w-full bg-white"
  >
   <div
    class="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full px-3 py-5 mx-auto"
   >
    <NuxtLink
     to="/"
     class="min-w-[170px]"
    >
     <img
      width="170"
      src="/AliExpress-logo.png"
     />
    </NuxtLink>

    <div class="max-w-[700px] w-full md:block hidden">
     <div class="relative">

        <!-- search input -->
      <div
       class="flex items-center border-2 border-[#FF4646] rounded-md w-full"
      >
       <input
        class="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none"
        placeholder="kitchen accessories"
        type="text"
        v-model="searchItem"
       />
       <Icon
        v-if="isSearching"
        name="eos-icons:loading"
        size="25"
        class="mr-2"
       />
       <button
        class="flex items-center h-[100%] p-1.5 px-2 bg-[#FF4646]"
       >
        <Icon
         name="ph:magnifying-glass"
         size="20"
         color="#ffffff"
        />
       </button>
      </div>


      <!-- search results -->
      <div class="absolute bg-white max-w-[700px] h-auto w-full">
       <div
        v-if="items && items?.data"
        v-for="item in items?.data"
        class="p-1"
       >
        <NuxtLink
         :to="`/item/${item.id}`"
         class="flex items-center justify-between w-full cursor-pointer hover:bg-gray-100"
        >
         <div class="flex items-center">
          <img
           class="rounded-md"
           width="40"
           :src="item.url"
          />
          <div class="truncate ml-2">{{ item.title }}</div>
         </div>
         <div class="truncate">${{ item.price / 100 }}</div>
        </NuxtLink>
       </div>
      </div>
     </div>
    </div>


    <!-- cart icon -->
    <NuxtLink
     to="/shoppingcart"
     class="flex items-center"
    >
     <button
      class="relative md:block hidden"
      @mouseenter="isCartHover = true"
      @mouseleave="isCartHover = false"
     >
      <span
       class="absolute flex items-center justify-center -right-[3px] top-0 bg-[#FF4646] h-[17px] min-w-[17px] text-xs text-white px-0.5 rounded-full"
      >
       <!-- {{ userStore.cart.length }} -->
       0
      </span>
      <div class="min-w-[40px]">
       <Icon
        name="ph:shopping-cart-simple-light"
        size="33"
        :color="isCartHover ? '#FF4646' : ''"
       />
      </div>
     </button>
    </NuxtLink>

    <button
     class="md:hidden block rounded-full p-1.5 -mt-[4px] hover:bg-gray-200"
    >
     <Icon
      name="radix-icons:hamburger-menu"
      size="33"
     />
    </button>
   </div>
  </div>

</template>

<script setup >
let isSearching = ref(false);
let searchItem = ref('');
let isCartHover = ref(false);
let items = ref(null);
// onsol
</script>

