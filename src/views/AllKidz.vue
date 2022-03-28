<template>
<section>
  <nav class="bg-black fixed flex items-center justify-between left-0 py-[31px] px-[120px] top-0 w-full z-10">
    <div class="flex">
      <router-link to="/"><img src="../assets/images/logo.svg" alt="brand-logo"></router-link>
      <span class="bg-yellow-400 block font-bold leading-5 ml-3 px-[10.5px] py-[3px] rounded-lg text-black">Campfire</span>
    </div>
      
    <ul class="flex items-center">
      <li class="cursor-pointer leading-6 mr-6 hover:text-yellow-400 transition">Photobooth</li>
      <li class="cursor-pointer leading-6 mr-6 hover:text-yellow-400 transition">Rewards</li>
      <li class="cursor-pointer leading-6 mr-6 hover:text-yellow-400 transition">Squadz</li>
      <li class="cursor-pointer leading-6 mr-6 hover:text-yellow-400 transition">Explorer</li>
      <li class="cursor-pointer leading-6 mr-6 hover:text-yellow-400 transition">Marketplace</li>
      <li class="cursor-pointer leading-6 mr-6 hover:text-yellow-400 text-yellow-400 transition"><router-link to="/all-kidz">Kidz & Assets</router-link></li>
      <button class="bg-[#06151A] inline-flex items-center px-[11px] py-[5px] rounded-lg text-sm tracking-wide">        
        <svg class="mr-2" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.6 2.88889V1.44444C12.6 0.647833 11.9721 0 11.2 0H2.1C0.9422 0 0 0.972111 0 2.16667V10.8333C0 12.4229 1.2558 13 2.1 13H12.6C13.3721 13 14 12.3522 14 11.5556V4.33333C14 3.53672 13.3721 2.88889 12.6 2.88889ZM2.1 1.44444H11.2V2.88889H2.1C1.91976 2.88057 1.74958 2.80084 1.62489 2.66631C1.5002 2.53178 1.43061 2.35281 1.43061 2.16667C1.43061 1.98052 1.5002 1.80155 1.62489 1.66702C1.74958 1.53249 1.91976 1.45276 2.1 1.44444ZM12.6 11.5556H2.1084C1.785 11.5469 1.4 11.4147 1.4 10.8333V4.19972C1.6198 4.28133 1.8529 4.33333 2.1 4.33333H12.6V11.5556Z" fill="white"/>
        </svg> Connected
      </button>
    </ul>
  </nav>

  <section class="bg-[color:var(--bg-green)] mt-[92px] rounded-t-[75px]">
    <div class="flex justify-between pb-10 pt-12 px-28">
      <div class="pl-1.5">
        <h1 class="font-bold leading-[55px] text-[42px]">All Kidz & Assets</h1>

        <div class="flex items-center pt-[5px]">
          <p class="font-bold leading-5">Sort</p>
          <span class="bg-black/75 inline-flex items-center ml-3 px-[9px] py-[3px] rounded-lg text-sm text-[#e0e0e0]">
            <svg class="mr-1.5" width="10" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5.5 6L10 1" stroke="#E0E0E0"/>
            </svg> Alphabetical
          </span>

          <span class="bg-black/75 inline-flex items-center ml-[9px] px-[9px] py-[3px] rounded-lg text-sm text-[#e0e0e0]">
            <svg class="mr-1.5" width="10" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5.5 6L10 1" stroke="#E0E0E0"/>
            </svg> Ascending
          </span>
        </div>
      </div>

      <ul class="flex">
        <li class="flex flex-col items-center mr-4">
          <div class="bg-yellow-400/10 flex h-[50px] items-center justify-center p-2.5 w-[50px] rounded-2xl">
            <img src="../assets/images/icons/all.svg" alt="image icon">
          </div>
          <span class="leading-4 pt-1 text-xs text-[color:var(--yellow)]">All</span>
        </li>

        <li class="flex flex-col items-center mr-4">
          <div class="bg-[#0c1209] flex h-[50px] items-center justify-center p-2.5 w-[50px] rounded-2xl">
            <img src="../assets/images/icons/kidz.svg" alt="image icon">
          </div>
          <span class="leading-4 pt-1 text-xs">Kidz</span>
        </li>

        <li class="flex flex-col items-center mr-4">
          <div class="bg-[#0c1209] flex h-[50px] items-center justify-center p-2.5 w-[50px] rounded-2xl">
            <img src="../assets/images/icons/items.svg" alt="image icon">
          </div>
          <span class="leading-4 pt-1 text-xs">Items</span>
        </li>

        <li class="flex flex-col items-center mr-4">
          <div class="bg-[#0c1209] flex h-[50px] items-center justify-center p-2.5 w-[50px] rounded-2xl">
            <img src="../assets/images/icons/usables.svg" alt="image icon">
          </div>
          <span class="leading-4 pt-1 text-xs">Usables</span>
        </li>

        <li class="flex flex-col items-center mr-4">
          <div class="bg-[#0c1209] flex h-[50px] items-center justify-center p-2.5 w-[50px] rounded-2xl">
            <img src="../assets/images/icons/capz.svg" alt="image icon">
          </div>
          <span class="leading-4 pt-1 text-xs">Capz</span>
        </li>

        <li class="flex flex-col items-center mr-4">
          <div class="bg-[#0c1209] flex h-[50px] items-center justify-center p-2.5 w-[50px] rounded-2xl">
            <img src="../assets/images/icons/keepsakes.svg" alt="image icon">
          </div>
          <span class="leading-4 pt-1 text-xs">Keepsakes</span>
        </li>
      </ul>
    </div>

    <div class="gap-5 grid grid-cols-[repeat(auto-fill,minmax(225px,1fr))] pb-[178px] px-[117.5px] relative">
      <div
          class="bg-[#121a0f] cursor-pointer flex flex-col items-center relative rounded-[30px] py-[18px] max-w-[225px]}"
          v-for="(item, index) in allItems"
          :key="index"
      >
        <div 
            class="bg-black flex h-[180px] items-center justify-center rounded-[20px] w-[180px]"    
            @click="setShowModal(item)"
        >
          <img :src="item.imgSrc" :alt="item.title.toLowerCase() + ' icon'">
        </div>  
          
        <h2 class="font-bold leading-[23px] pt-[18px] text-lg">{{ item.title }}</h2>
        <p class="leading-[23px] text-center px-4 text-lg">“{{ item.desc }}”</p>
        
        <Modal
            :item="item"
            v-if="item.isActive"
            @closeModalEvent="setShowModal(item)"
        />
      </div>
    </div>
  </section>
</section>  
</template>

<script>
import Modal from "../components/Modal.vue";
import kid0314Image from "../assets/images/items/kid0314.svg";
import kid3514Image from "../assets/images/items/kid3514.svg";
import keepsake1Image from "../assets/images/items/keepsake1.svg";
import keepsake2Image from "../assets/images/items/keepsake2.svg";
import itemHelmetImage from "../assets/images/items/item-helmet.svg";
import itemHelmet2Image from "../assets/images/items/item-helmet2.svg";
import itemMaskImage from "../assets/images/items/item-mask.svg";
import itemMask2Image from "../assets/images/items/item-mask2.svg";
import itemStaffImage from "../assets/images/items/item-staff.svg";

export default {
  components: { Modal },

  data() {
    return {
      showModal: false,
      allItems: [
        {
          imgSrc: kid0314Image,
          title: "Ep 01 Kid #0134",
          isActive: false,
          desc: "Paperbag"
        },
        {
          imgSrc: kid3514Image,
          title: "Ep 01 Kid #3514",
          isActive: false,
          desc: "Palmtree"
        },
        {
          imgSrc: keepsake1Image,
          title: "Keepsake",
          isActive: false,
          desc: "Chronicles: Vol. 1..."
        },
        {
          imgSrc: keepsake2Image,
          title: "Keepsake",
          isActive: false,
          desc: "46 Antenna"
        },
        {
          imgSrc: itemMaskImage,
          title: "Item: Mask",
          isActive: false,
          desc: "Golden Scarab Mask"
        },
        {
          imgSrc: itemHelmetImage,
          title: "Item: Helmet",
          isActive: false,
          desc: "Pink Shell Headband"
        },
        {
          imgSrc: itemHelmet2Image,
          title: "Item: Helmet",
          isActive: false,
          desc: "Broken Antler Ski Go..."
        },
        {
          imgSrc: itemStaffImage,
          title: "Item: Staff",
          isActive: false,
          desc: "Ancient Sandworm..."
        },
        {
          imgSrc: itemMask2Image,
          title: "Item: mask",
          isActive: false,
          desc: "Oola White Tiki Mask"
        },
      ]
    }
  },

  methods: {
    setShowModal(item) {
      item.isActive = !item.isActive;
    }
  }
}
</script>

<style>
</style>