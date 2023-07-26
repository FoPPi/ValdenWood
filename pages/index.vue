<script setup>

  const cards = [
    { icon: 'material-symbols:edit-outline-rounded', name: 'Авторський дизайн меблів' , text: 'Втілимо у проекті будь-які ідеї, які Вам подобаються. Ваші меблі будуть повністю такими, якими ви їх собі задумали.'},
    { icon: 'ph:thumbs-up', name: 'Виготовлення проектів будь-якої складності' , text: 'Створимо дизайнерські меблі за короткий термін. Для цього у нас є власна майстерня та сучасне обладнання.'},
    { icon: 'ph:smiley', name: 'Висока якість матеріалів' , text: 'Використовуємо європейські матеріали для виробництва меблів. Вони не містять шкідливих речовин, довговічні, міцні, а так само мають гарний зовнішній вигляд.'},
    { icon: 'ic:baseline-alarm-on', name: 'Виготовлення замовлення вчасно' , text: 'Працюючи у сфері "меблі на замовлення" більше 10 років, ми завжди дотримуємося правил - здачі замовлення в обумовлені терміни.'},
  ];

  const portfolio = [
    {image: '/kitchens/kitchen-1.png', title: 'Кухні на замовлення', text: 'Ви малюєте в уяві - ми руками реалізуємо будь-який дизайн кухні, і це не рівень масмаркету. апевно, Ви думаєте, що купити кухню можна в будь-якому магазині під будинком. Але чомусь через 2 роки починають рипіти двері, відшаровується фасад, і Ви переплачуєте, повторно купуючи меблі для кухні.', link: '/kitchens'},
    {image: '/bathrooms/bathroom-1.png', title: 'Ванні кімнати на замовлення', text: 'Мабуть, меблі у ванну кімнату одне з найусвідомленіших вкладень. Її точно не захочеться переробляти, як і бачити розшаровану знизу тумбочку. Так, у ванній підвищена вологість, а значить і матеріал, і обробка не є типовими.', link: '/bathrooms'},
    {image: '/closets/closet-1.png', title: 'Шафи та Гардеробні на замовлення', text: 'Повісити пальто на відстані витягнутої руки, заходячи до квартири – це успіх! Адже купити шафу-купе в Києві можна, але набагато краще виготовити меблі в передпокій на замовлення. Тільки тоді Ваше зростання, місткість, зручність будуть реально враховані.', link: '/closets'},
  ];

  const isOpen = ref(false);

</script>

<template>
  <section class="start">
    <h1 class="text-white text-center font-bold text-5xl sm:text-6xl md:text-8xl mb-6">Майстерня меблів<br/>Valden Wood</h1>
    <p class="text-[#838E9E] text-center mb-6">Виробимо для вас неймовірні меблі<br/>преміум-класу у Києві та області під ключ</p>
    <button class="text-white text-lg font-bold rounded-lg bg-[#7534FF] hover:bg-[#5d2ac3] py-4 px-10 transform duration-300" @click="isOpen = true">Зв'язатися з нами <Icon name="material-symbols:arrow-forward" size="24px"/></button>
  </section>

  <UModal v-model="isOpen">
    <Modal />
  </UModal>

  <section class="flex flex-col text-center items-center justify-center">
    <h2 class="text-black text-5xl font-bold mt-16 mb-10">Чому саме ми?</h2>
    <div class="flex flex-wrap justify-center px-4">
      <div
          v-for="(item, index) in cards"
          class="flex flex-col m-6 text-left max-w-[400px] p-8 bg-white rounded-lg shadow-custom"
          :key="index"
      >
        <Icon class="text-white p-3 bg-[#7534FF] rounded-xl" size="70px" :name="item.icon" />
        <h3 class="my-3 text-[#2F1566] text-xl">{{ item.name }}</h3>
        <p class="text-[#42526B]">{{ item.text }}</p>
      </div>
    </div>
  </section>


  <section class="flex justify-center mt-36">
    <div class="flex flex-col max-w-[1320px] p-2 space-y-10">
      <h3 class="flex text-5xl font-bold">Що ми<br/>створюємо?</h3>
      <div
          v-for="(item, index) in portfolio"
          :key="index"
          class="portfolio-item flex flex-col-reverse xl:flex-row"
      >
        <div class="portfolio-content flex-1 xl:ml-10">
          <h4 class="text-3xl font-bold text-[#2F1566]">{{ item.title }}</h4>
          <p class="text-lg text-[#42526B] my-5">{{ item.text }}</p>
          <NuxtLink
              class="text-[#7534FF] text-lg rounded-lg bg-[#F1EBFF] hover:bg-[#c0bccc] py-3 px-8 transform duration-300"
              :to="item.link"
          >Детальніше <Icon name="material-symbols:arrow-forward" size="20px"/></NuxtLink>
        </div>
        <img :src="item.image" alt="image" class="flex-1 xl:ml-10 w-[660px] bg-cover bg-center"/>
      </div>
    </div>
  </section>


  <FAQ/>

  <section class="flex justify-center mt-24 md:mt-36">
    <div class="flex flex-col lg:flex-row max-w-[1320px] p-2 lg:space-x-20">
      <div class="text-center md:text-left">
        <h2 class="text-3xl md:text-5xl font-bold" >Привіт! Розкажи нам<br/>чого бажаєш <Icon name="noto:hand-with-fingers-splayed"/></h2>
        <p class="text-[#42526B] my-3">Завжди відкриті для ваших замовлень, чекаємо саме на ВАШ дзвінок!</p>
      </div>
      <div class="flex flex-col md:flex-row items-center justify-center md:space-x-20 p-4">
        <div class="flex flex-col p-2 md:p-0 items-center justify-center">
          <Icon name="ph:envelope-simple-open" class="text-[#7534FF] bg-[#F1EBFF] hover:text-[#F1EBFF] hover:bg-[#7534FF] transform duration-200 rounded-full p-4" size="75px"/>
          <p class="text-[#838E9E]">Адреса електронної пошти</p>
          <a class="text-lg hover:bg-[#F1EBFF] p-1 rounded-lg transform duration-300" href="mailto:mebelhouse@ukr.net" target="_blank">mebelhouse@ukr.net</a>
        </div>
        <div class="flex flex-col p-2 md:p-0  items-center justify-center">
          <Icon name="solar:phone-calling-linear" class="text-[#7534FF] bg-[#F1EBFF] hover:text-[#F1EBFF] hover:bg-[#7534FF] transform duration-200 rounded-full p-4" size="75px"/>
          <p class="text-[#838E9E]">Номер телефону</p>
          <a class="text-lg hover:bg-[#F1EBFF] p-1 rounded-lg transform duration-300" href="tel:+380952290123">+38 (095) 229 01 23</a>
          <a class="text-lg hover:bg-[#F1EBFF] p-1 rounded-lg transform duration-300" href="tel:+380933634401">+38 (093) 363 44 01</a>
        </div>
      </div>
    </div>
  </section>

  <section class="map relative my-20">
    <div class="flex justify-center">
      <a href="https://goo.gl/maps/RVkvFp5ZPm72mr7F8" target="_blank">
        <button class="text-white text-lg font-bold mt-[600px] rounded-lg bg-[#7534FF] hover:bg-[#5d2ac3] py-4 px-10 transform duration-300">Перейти До Google Maps <Icon name="material-symbols:arrow-forward" size="24px"/></button>
      </a>
    </div>
  </section>

  <Footer/>
</template>

<style>
  .start {
    display: flex;
    margin-top: -200px;
    height: 1110px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.80) 100%), url("/bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .portfolio-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .map {
    height: 700px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url("/map.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>
