<template>
  <footer>
    <div class="flex flex-col lg:flex-row items-center justify-center text-center space-y-10 lg:space-y-0 lg:space-x-20 lg:my-40 px-3">

      <div class="flex flex-col items-center justify-center text-center w-[424px] space-y-2">
        <h3 class="text-2xl font-bold text-[#2F1566]">Контакти</h3>
        <div class="flex flex-col text-[#6A778B]">
          <a class="hover:bg-[#F1EBFF] p-1 rounded-lg transform duration-300" href="tel:+380952290123">+38 (095) 229 01 23</a>
          <a class="hover:bg-[#F1EBFF] p-1 rounded-lg transform duration-300" href="tel:+380933634401">+38 (093) 363 44 01</a>
          <a class="hover:bg-[#F1EBFF] p-1 rounded-lg transform duration-300" href="mailto:mebelhouse@ukr.net" target="_blank">mebelhouse@ukr.net</a>
        </div>
      </div>

      <div class="flex flex-col items-center w-[424px] space-y-2">
        <img class="max-w-[200px]" src="/logo.svg" alt="logo">
        <p class="px-4">Майстерня меблів на замовлення Valden Wood. Виробимо для вас меблі преміум-класу у Києві та області  під ключ.</p>
        <div class="flex flex-row space-x-6 items-center ">
          <a  href="https://www.instagram.com/valden_wood/" target="_blank"  class="flex items-center hover:scale-110 transform duration-300">
            <button class="inst-button flex items-center p-2">
              <img src="/social/instagram.svg" alt="instagram" class="w-6 h-6 mr-2"/>
              <span class="opacity-[0.15] text-[#061C3D]">|</span>
              <span class="ml-2">Instagram</span>
            </button>
          </a>
          <a class="flex items-center hover:scale-110 transform duration-300">
            <button class="tg-button flex items-center p-2">
              <img src="/social/telegram.svg" alt="telegram" class="w-6 h-6 mr-2"/>
              <span class="opacity-[0.15] text-[#061C3D]">|</span>
              <span class="ml-2">Telegram</span>
            </button>
          </a>
        </div>
      </div>

      <div class="flex flex-col w-[424px] space-y-2">
        <h3 class="text-2xl font-bold text-[#2F1566]">Адреса</h3>
        <p class="text-lg text-[#6A778B]">ТЦ. Діамант<br/>м. Київ, Петропавлівська Борщагівка,вул. Петропавлівська, 14-Е 2 поверх</p>
      </div>
    </div>

    <hr class="border-[#141414] opacity-40 my-4 mx-48" />
    <div class="flex mt-3 mb-5 items-center text-#061C3D[] justify-center space-x-5 sm:space-x-24 lg:space-x-48">
      <a class="hover:text-[#2F1566] transform duration-300" href="https://green-line-studio.vercel.app/" target="_blank">Developed by: Green Line Studio</a>
      <p>© 2013-2023 - Valden Wood</p>
    </div>

  </footer>
</template>
<script setup lang="ts">
</script>