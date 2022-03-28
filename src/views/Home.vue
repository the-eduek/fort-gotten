<template>
<section>
  <nav class="bg-black fixed flex items-center justify-between left-0 py-[31px] px-[120px] top-0 w-full z-10">
    <div class="flex">
      <router-link to="/"><img src="../assets/images/logo.svg" alt="brand-logo"></router-link>
      <span class="bg-yellow-400 block font-bold leading-5 ml-3 px-[10.5px] py-[3px] rounded-lg text-black">Campfire</span>
    </div>
      
    <ul class="flex items-center">
      <li class="cursor-pointer leading-6 mr-6 hover:text-yellow-400 transition"><router-link to="/all-kidz">Kidz & Assets</router-link></li>
      <li class="cursor-pointer leading-6 mr-6 hover:text-yellow-400 transition">Photobooth</li>
      <li class="cursor-pointer leading-6 mr-6 hover:text-yellow-400 transition">Rewards</li>
      <li class="cursor-pointer leading-6 mr-6 hover:text-yellow-400 transition">Squadz</li>
      <li class="cursor-pointer leading-6 mr-6 hover:text-yellow-400 transition">Explorer</li>
      <li class="cursor-pointer leading-6 mr-6 hover:text-yellow-400 transition">Marketplace</li>
      <button class="bg-[#06151A] inline-flex items-center px-[11px] py-[5px] rounded-lg text-sm tracking-wide">        
        <svg class="mr-2" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.6 2.88889V1.44444C12.6 0.647833 11.9721 0 11.2 0H2.1C0.9422 0 0 0.972111 0 2.16667V10.8333C0 12.4229 1.2558 13 2.1 13H12.6C13.3721 13 14 12.3522 14 11.5556V4.33333C14 3.53672 13.3721 2.88889 12.6 2.88889ZM2.1 1.44444H11.2V2.88889H2.1C1.91976 2.88057 1.74958 2.80084 1.62489 2.66631C1.5002 2.53178 1.43061 2.35281 1.43061 2.16667C1.43061 1.98052 1.5002 1.80155 1.62489 1.66702C1.74958 1.53249 1.91976 1.45276 2.1 1.44444ZM12.6 11.5556H2.1084C1.785 11.5469 1.4 11.4147 1.4 10.8333V4.19972C1.6198 4.28133 1.8529 4.33333 2.1 4.33333H12.6V11.5556Z" fill="white"/>
        </svg> Connected
      </button>
    </ul>

    <button class="absolute bg-[#192116] h-[30px] inline-flex items-center justify-center rounded-full right-8 top-8 w-[30px]">
      <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.25392 0.229727C8.76692 -0.197702 9.60713 0.125727 9.60713 0.75087V11.248C9.60713 11.8732 8.76756 12.1966 8.25392 11.7692L5.08013 9.12573C4.87173 8.95215 4.59687 8.85552 4.31128 8.85544H2.37499C1.82088 8.85544 1.28946 8.65978 0.897643 8.3115C0.505826 7.96322 0.285706 7.49084 0.285706 6.9983V5.00287C0.285706 4.51032 0.505826 4.03795 0.897643 3.68967C1.28946 3.34139 1.82088 3.14573 2.37499 3.14573H4.31063C4.59671 3.14573 4.87185 3.04858 5.08013 2.87544L8.25392 0.229727ZM12.914 0.962298C13.01 0.887328 13.1356 0.849309 13.2631 0.856596C13.3906 0.863882 13.5097 0.915877 13.5941 1.00116C14.9631 2.38181 15.7171 4.15964 15.7143 6.00001C15.7143 7.91544 14.9133 9.66516 13.5941 10.9983C13.553 11.0425 13.5023 11.0789 13.445 11.1054C13.3878 11.1318 13.3251 11.1478 13.2608 11.1523C13.1965 11.1569 13.1318 11.1499 13.0705 11.1318C13.0093 11.1137 12.9528 11.0848 12.9043 11.047C12.8558 11.0091 12.8164 10.9629 12.7884 10.9113C12.7603 10.8596 12.7443 10.8035 12.7411 10.7462C12.7379 10.6889 12.7477 10.6316 12.7699 10.5777C12.7921 10.5239 12.8262 10.4745 12.8703 10.4326C14.0843 9.20844 14.7529 7.63192 14.75 6.00001C14.753 4.36809 14.0844 2.79153 12.8703 1.56744C12.8284 1.52517 12.7963 1.47598 12.7759 1.42268C12.7554 1.36938 12.747 1.31302 12.751 1.25682C12.7551 1.20062 12.7716 1.14568 12.7995 1.09514C12.8275 1.04461 12.8664 0.999465 12.914 0.962298ZM12.0841 2.74458C12.0073 2.65365 11.8931 2.59354 11.7665 2.57746C11.6399 2.56139 11.5114 2.59067 11.4091 2.65887C11.3068 2.72707 11.2391 2.8286 11.2211 2.94112C11.203 3.05364 11.2359 3.16794 11.3126 3.25887C11.9808 4.04917 12.3412 5.01142 12.3393 6.00001C12.3393 7.02858 11.9574 7.97716 11.3126 8.74116C11.2746 8.78618 11.247 8.83741 11.2313 8.89194C11.2156 8.94646 11.2121 9.00319 11.2211 9.05891C11.23 9.11462 11.2512 9.16822 11.2835 9.21665C11.3157 9.26508 11.3584 9.30739 11.4091 9.34116C11.4597 9.37492 11.5174 9.39949 11.5787 9.41346C11.64 9.42743 11.7039 9.43052 11.7665 9.42256C11.8292 9.4146 11.8895 9.39575 11.944 9.36707C11.9985 9.3384 12.0461 9.30047 12.0841 9.25544C12.8774 8.31679 13.3055 7.17407 13.3036 6.00001C13.3056 4.82595 12.8775 3.68322 12.0841 2.74458Z" fill="white"/>
      </svg>      
    </button>
  </nav>

  <section class="bg-[color:var(--bg-green)] mt-[92px] rounded-t-[75px]">
    <div class="pt-[84px] text-center">
      <h1 class="font-bold leading-[47px] text-4xl">Welcome to the <span class="text-yellow-400">Campfire</span> fellow Kid!</h1>
      <p class="leading-6 pt-1.5 text-lg text-[color:var(--gray4)]">Here, you’ll be able to do all the things we kidz to here in Fort Gotten.</p>
    </div>
    <KidzGrid />
  </section>
</section>
</template>

<script>
import KidzGrid from "../components/KidzGrid.vue";

export default {
    components: { KidzGrid }
}
</script>

<style>
</style>