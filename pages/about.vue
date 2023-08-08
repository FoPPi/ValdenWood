<template>
  <section class="bg flex flex-row justify-center items-center">
    <div class="flex flex-col w-[760px] ml-8 mr-8 md:ml-16 md:mr-16 lg:ml-32 2xl:ml-64 lg:mr-24">
      <div class="space-y-10">
        <div>
          <p class=" text-sm text-[#170A33] bg-[#F1EBFF] rounded-full py-2 px-4">ЛАСКАВО ПРОСИМО ДО <span class="font-bold">VALDEN WOOD</span></p>
          <h1 class="text-5xl font-bold">Хто ми такі? <Icon name="noto:thinking-face"/></h1>
        </div>
        <p class="text-[#42526B]">
          Майстерня меблів Valden Wood - це команда кваліфікованих майстрів з Києва. Ми створюємо якісні корпусні меблі на замовлення різних стилів: класичний стиль, хай-тек, скандинавський стиль, лофт та ін.
          <br/><br/>Ми успішно виготовляємо вологостійкі меблі для ванної, практичні та стильні меблі для кухні, вбиральні, дитячої та спальні. Розробляємо дизайн, виготовляємо та встановлюємо меблі преміальної якості ось уже понад 10 років. Всі вироби виготовляються та перевіряються у нашій спеціально обладнаній майстерні.
          За минулий рік ми реалізували понад 25 проектів. Пишаємося кожним і любимо свою справу!
        </p>
<!--        <button class="text-white  rounded-lg bg-[#7534FF] hover:bg-[#5d2ac3] py-3 px-6 transform duration-300">Наші роботи</button>-->
      </div>
    </div>
    <img class="hidden lg:block w-[550px] xl:w-[700px] 2xl:w-[800px]" src="/office.png" alt="office"/>
  </section>
</template>

<style>
  .bg{
    margin-top: -200px;
    height: 1175px;
    background: url("/strops.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
<script setup lang="ts">
</script>