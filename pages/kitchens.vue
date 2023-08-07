<script setup>

  const kitchens = [
    {image: 'ObolonSky.png', title: 'Obolon Sky', text: 'Корпус-Еггер (Австрія), фурнітура Блюм (Австрія), фасади з акрилових матеріалів Ньюман (Німеччина), вбудована техніка Бош, стільниця з композитного матеріалу - дуже стійка до ударів і хімії.'},
    {image: 'Zarechnyi.png', title: 'ЖК Зарічний', text: 'Корпус виконано з ДСП Еггер (Австрія) 18 мм. Фурнітура Блюм Австрія, стільниця Арпа. Фасади Кліф, HPL- пластик.'},
    {image: 'HerzenPark.png', title: 'ЖК Герцен Парк', text: 'Корпус кухні виконано з Дсп Еггер, фасади Нб.ман, фурнітура частково блюм, частково мюллер'},
    {image: 'ParkLand.png', title: 'ЖК Парк Ленд', text: 'Корпус меблів виконано з ДСП Кроношпан Україна, фасади МДФ фарбований, фурнітура БЛЮМ, стільниця кроношпан Україна'},
    {image: 'Sofia.png', title: 'ЖК Софія', text: 'Фурнітура Мюллер, Фасади ДСП Еггер (Австрія), оскільки використовували ДСП для Фасадів, то робили поклейку кромки ПУР клеєм.  Стільниця Кроношпан Україна 38 мм'},
    {image: 'GrandBourget.png', title: 'ЖК Гранд Бурже', text: 'Корпус виконано з ДСП Еггер (Австрія) 18 мм. Фурнітура Блюм Австрія, стільниця Арпа. Фасади з акрилових матеріалів Ньюман, Стільниця з литою раковиною зі штучного каменю Трістоун.'},
    {image: 'Brovary.png', title: 'ЖК у Броварах', text: 'Корпус кухні виконаний з ДСП Кроношпан Україна, фурнітура Блюм Австрія,стільниця на основі Вологостійкого ДСП Еггер, Фасади з екологічно чистого матеріалу Saviola.. (Італія)'},
    {image: 'Peremogy.png', title: 'пр-кт Перемоги', text: 'Фурнитура Блюм Австрия , столешница Арпа. Фасады Клиф, HPL- пластик'},
    {image: 'GoldenGate.png', title: 'Золоті ворота', text: 'Корпус Меблів Австрійське ДСП (Еггер), з використанням якісної фурнітури Блюм (Австрія), Фасади МДФ фарбований, а також не які матеріали з акрилових панелей АГТ (Туреччина)'},
    {image: 'Petrovsky.png', title: 'ЖК Петровський', text: 'Інформації немає'},
    {image: 'Belogorodka.png', title: 'Білогородка приватний будинок', text: 'Інформації немає'},
    {image: 'KPI.png', title: 'КПІ', text: 'Інформації немає'},
    {image: 'Kharkiv.png', title: 'ЖК Харківський', text: 'Корпус виконано з ДСП Еггер (Австрія) 18 мм. Фурнітура Блюм Австрія, стільниця Арпа. Фасади Кліф, HPL- пластик.'},
  ];

  const isOpen = ref(false);

</script>


<template>

  <div class="flex justify-center">
  <div class="flex flex-col p-0 mx-2 my-4 text-left w-[1000px] 2xl:w-[1248px]">
    <h3 class="text-4xl font-bold mb-2">Наші кухні</h3>
    <p class="text-[#42526B]">Ви малюєте в уяві - ми руками реалізуємо будь-який дизайн кухні, і це<br/>не рівень масмаркету. Ви «дихатимете» кухнею щодня мінімум 5-7<br/>років, вибирайте виконавця усвідомлено!</p>
  </div>
  </div>

  <div class="flex flex-wrap justify-center">
    <div
        v-for="(item, index) in kitchens"
        class="flex flex-col m-2 lg:m-6 text-left max-w-[500px] 2xl:max-w-[624px] bg-white rounded-lg hover:shadow-custom transform duration-300"
        :key="index"
    >
      <img :src="'/kitchens/' + item.image" :alt="`kitchen ` + index">
      <div class="border-[1px] border-[#E6E8EC] border-t-0 rounded-b-lg p-[32px]">
        <h4 class="mb-[8px] text-xl">{{item.title}}</h4>
        <p class="mb-[4px] text-[#42526B] min-h-[72px]">{{item.text}}</p>
        <button class="text-[#7534FF]" @click="isOpen = true">Дізнатись вартість <Icon name="material-symbols:arrow-forward" size="20px"/></button>
      </div>
    </div>
  </div>

  <UModal v-model="isOpen">
    <Modal />
  </UModal>

  <Footer/>

</template>