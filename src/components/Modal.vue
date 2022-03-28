<template>
  <section class="bg-black/90 backdrop-blur-[10px] fixed flex h-screen items-center justify-center left-0 w-screen top-0 z-50 ">
    <div class="w-full px-[176px] relative">
      <div class="flex items-center pb-[26px]">
        <h2 class="font-bold leading-[46px] text-4xl">{{ item.title }}</h2> 
        <a 
          href=""
          class="bg-[#192116] font-bold leading-6 ml-4 px-3.5 py-[5px] rounded-lg text-lg"
        >View on Pool.pm</a>
      </div>

      <div class="flex">
        <div class="w-[53%] max-h-[600px]">
          <img 
            :src="item.imgSrc" 
            alt=""
            class="w-full h-full"
          >
        </div>

        <ul class="flex-grow pl-8">
          <li class="flex items-center text-lg mb-[15px]">
            <span class="font-medium text-right text-[color:var(--gray4)] w-24">Region</span> 
            <span class="bg-[#192116] flex-grow font-bold leading-6 mx-3 px-3.5 py-[5px] rounded-lg w-[300px]">Ocean</span> 
            <span class="text-base text-[#828282]">1000/5000</span>
          </li>
          <li class="flex items-center text-lg mb-[15px]">
            <span class="font-medium text-right text-[color:var(--gray4)] w-24">Camp</span> 
            <span class="bg-[#192116] flex-grow font-bold leading-6 mx-3 px-3.5 py-[5px] rounded-lg w-[300px]">OOLA</span> 
            <span class="text-base text-[#828282]">1000/5000</span>
          </li>
          <li class="flex items-center text-lg mb-[15px]">
            <span class="font-medium text-right text-[color:var(--gray4)] w-24">Role</span> 
            <span class="bg-[#192116] flex-grow font-bold leading-6 mx-3 px-3.5 py-[5px] rounded-lg w-[300px]">Cleric</span> 
            <span class="text-base text-[#828282]">1000/5000</span>
          </li>
          <li class="flex items-center text-lg mb-[15px]">
            <span class="font-medium text-right text-[color:var(--gray4)] w-24">Body</span> 
            <span class="bg-[#192116] flex-grow font-bold leading-6 mx-3 px-3.5 py-[5px] rounded-lg w-[300px]">Sky Blue</span> 
            <span class="text-base text-[#828282]">1000/5000</span>
          </li>
          <li class="flex items-center text-lg mb-[15px]">
            <span class="font-medium text-right text-[color:var(--gray4)] w-24">Hat</span> 
            <span class="bg-[#192116] flex-grow font-bold leading-6 mx-3 px-3.5 py-[5px] rounded-lg w-[300px]">Bushface</span> 
            <span class="text-base text-[#828282]">1000/5000</span>
          </li>
          <li class="flex items-center text-lg mb-[15px]">
            <span class="font-medium text-right text-[color:var(--gray4)] w-24">Clothing</span> 
            <span class="bg-[#192116] flex-grow font-bold leading-6 mx-3 px-3.5 py-[5px] rounded-lg w-[300px]">None</span> 
            <span class="text-base text-[#828282]">1000/5000</span>
          </li>
          <li class="flex items-center text-lg mb-[15px]">
            <span class="font-medium text-right text-[color:var(--gray4)] w-24">Straps</span> 
            <span class="bg-[#192116] flex-grow font-bold leading-6 mx-3 px-3.5 py-[5px] rounded-lg w-[300px]">None</span> 
            <span class="text-base text-[#828282]">1000/5000</span>
          </li>
          <li class="flex items-center text-lg mb-[15px]">
            <span class="font-medium text-right text-[color:var(--gray4)] w-24">Backpack</span> 
            <span class="bg-[#192116] flex-grow font-bold leading-6 mx-3 px-3.5 py-[5px] rounded-lg w-[300px]">None</span> 
            <span class="text-base text-[#828282]">1000/5000</span>
          </li>
          <li class="flex items-center text-lg mb-[15px]">
            <span class="font-medium text-right text-[color:var(--gray4)] w-24">Accessory</span> 
            <span class="bg-[#192116] flex-grow font-bold leading-6 mx-3 px-3.5 py-[5px] rounded-lg w-[300px]">None</span> 
            <span class="text-base text-[#828282]">1000/5000</span>
          </li>
          <li class="flex items-center text-lg mb-[15px]">
            <span class="font-medium text-right text-[color:var(--gray4)] w-24">Staff</span> 
            <span class="bg-[#192116] flex-grow font-bold leading-6 mx-3 px-3.5 py-[5px] rounded-lg w-[300px]">None</span> 
            <span class="text-base text-[#828282]">1000/5000</span>
          </li>
          <li class="flex items-center text-lg mb-[15px]">
            <span class="font-medium text-right text-[color:var(--gray4)] w-24">Mask</span> 
            <span class="bg-[#192116] flex-grow font-bold leading-6 mx-3 px-3.5 py-[5px] rounded-lg w-[300px]">Bushface</span> 
            <span class="text-base text-[#828282]">1000/5000</span>
          </li>
          <li class="flex items-center text-lg mb-[15px]">
            <span class="font-medium text-right text-[color:var(--gray4)] w-24">Special</span> 
            <span class="bg-[#192116] flex-grow font-bold leading-6 mx-3 px-3.5 py-[5px] rounded-lg w-[300px]">None</span> 
            <span class="text-base text-[#828282]">1000/5000</span>
          </li>
        </ul>
      </div>
    </div>

    <div 
        class="absolute right-[45px] top-[45px]"
        @click="closeModal"
    >
      <img src="../assets/images/close.svg" alt="close icon">
    </div>
  </section>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  methods: {
    closeModal() {
      this.$emit("closeModalEvent")
    }
  }
}
</script>

<style>

</style>