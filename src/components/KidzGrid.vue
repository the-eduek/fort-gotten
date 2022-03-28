<template>
<section class="gap-[25px] grid grid-cols-[repeat(auto-fill,minmax(225px,1fr))] pb-[126px] pt-[60px] px-[14.5rem]">
  <div
      class="bg-[#121a0f] flex flex-col items-center relative rounded-[30px] py-[31px] w-[225px]}"
      v-for="(option, index) in allOptions"
      :key="index"
      :class="{'filter grayscale-[75%] opacity-80' : option.disabled }" 
  >
    <div
        class="bg-[#06151a] flex h-[100px] items-center justify-center p-6 relative rounded-[30px] w-[100px]"
        :class="{'filter grayscale-[75%] opacity-80' : option.disabled }" 
    >
      <img :src="option.imgSrc" :alt="option.title.toLowerCase() + ' icon'">
      <span class="absolute bg-white bg-blend-lighten blur-[34px] filter h-[17px] opacity-25 rounded-[31.5px] top-2.5 w-[76px]"></span>
    </div>        
      
    <h2 class="font-bold leading-8 pb-1.5 pt-5 text-2xl">{{ option.title }}</h2>
    <p class="leading-5 px-4 text-center text-[color:var(--gray4)] text-[15px]">{{ option.info }}</p>
    <span 
        v-if="option.disabled"
        class="absolute bg-black font-medium leading-[18px] px-2.5 py-[5px] right-4 rounded-lg text-sm text-[#828282] top-4 z-10"
    >Coming Soon</span>
  </div>
</section>
</template>

<script>
import assetsImage from '../assets/images/home/assets.svg';
import kidImage from '../assets/images/home/kid.svg';
import photoboothImage from '../assets/images/home/photobooth.svg';
import rewardsImage from '../assets/images/home/rewards.svg';
import squadzImage from '../assets/images/home/squadz.svg';
import explorerImage from '../assets/images/home/explorer.svg';
import marketplaceImage from '../assets/images/home/marketplace.svg';
import discordImage from '../assets/images/home/discord.svg';

export default {
  data() {
    return {
      allOptions: [
        {
          imgSrc: assetsImage,
          title: "Kidz & Assets",
          info: "View and explore all the Fort Gotten Tokens in your Wallet."
        },
        {
          imgSrc: kidImage,
          title: "Change your Kid",
          info: "Add or Remove Items from your Kidz using Kid Compatible Assets (NFTs)"
        },
        {
          imgSrc: photoboothImage,
          title: "Photobooth",
          info: "Create custom Profile Picture and Social Media Images using your kidz."
        },
        {
          imgSrc: rewardsImage,
          title: "Rewards",
          info: "Claim this month's rewards for holding and participating in activitites!",
          disabled: true
        },
        {
          imgSrc: squadzImage,
          title: "Squadz",
          info: "Visualize, Create or Disband Fort Gotten Squadz using your kidz."
        },
        {
          imgSrc: explorerImage,
          title: "Explorer",
          info: "View and explore all the existing Fort Gotten NFTs"
        },
        {
          imgSrc: marketplaceImage,
          title: "Marketplace",
          info: "Buy, Sell and Trade all Fort Gotten NFTs in a single place"
        },
        {
          imgSrc: discordImage,
          title: "Discord Roles",
          info: "View, customize and manage verified owner Discord Roles"
        }
      ]
    }
  }
}
</script>

<style>

</style>