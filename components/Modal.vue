<template>
    <div class="flex flex-col justify-center items-center p-10 text-center space-y-4">
      <img src="/logo.svg" alt="logo">
      <p class="px-4">Майстерня меблів на замовлення Valden Wood. Виробимо для вас меблі преміум-класу у Києві та області  під ключ.</p>
      <div class="flex flex-row space-x-6 items-center ">
        <a href="https://www.instagram.com/valden_wood/" target="_blank" class="flex items-center hover:scale-110 transform duration-300">
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
      <div class="flex flex-col">
        <h3 class="text-2xl font-bold text-[#2F1566]">Контакти</h3>
        <div class="flex flex-col text-lg text-[#6A778B]">
          <a class="text-lg hover:bg-[#F1EBFF] p-1 rounded-lg transform duration-300" href="tel:+380952290123">+38 (095) 229 01 23</a>
          <a class="text-lg hover:bg-[#F1EBFF] p-1 rounded-lg transform duration-300" href="tel:+380933634401">+38 (093) 363 44 01</a>
          <a class="text-lg hover:bg-[#F1EBFF] p-1 rounded-lg transform duration-300" href="mailto:mebelhouse@ukr.net" target="_blank">mebelhouse@ukr.net</a>
        </div>
      </div>
    </div>
</template>

<style>

  .inst-button{
    border-radius: 5px;
    background: linear-gradient(45deg, rgba(255, 214, 0, 0.08) 0%, rgba(255, 1, 0, 0.08) 50%, rgba(216, 0, 185, 0.08) 100%);
  }

  .tg-button{
    border-radius: 5px;
    background: linear-gradient(45deg, rgba(0, 255, 240, 0.20) 0%, rgba(0, 26, 255, 0.20) 50%, rgba(82, 0, 216, 0.20) 100%);
  }

</style>