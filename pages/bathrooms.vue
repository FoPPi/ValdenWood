<script setup>

const bathrooms = [
  {image: 'ObolonSky.png', title: 'Obolon Sky'},
  {image: 'ParkLand.png', title: 'ЖК Парк Ленд'},
  {image: 'GoldenGate.png', title: 'Золоті ворота'},
  {image: 'Belogorodka.png', title: 'Білогородка приватний будинок'},
];

const isOpen = ref(false);

</script>


<template>

  <div class="flex justify-center">
    <div class="flex flex-col p-0 mx-2 my-4 text-left w-[1000px] 2xl:w-[1248px]">
      <h3 class="text-4xl font-bold mb-2">Ванні кімнати</h3>
      <p class="text-[#42526B]">У ванній підвищена вологість, а значить і матеріал, і обробка не є<br/>типовими. Тому виготовити шафу у ванну, тумбу з раковиною тощо.<br/>- Це ціле завдання для досвідченого майстра.</p>
    </div>
  </div>

  <div class="flex flex-wrap justify-center">
    <div
        v-for="(item, index) in bathrooms"
        class="flex flex-col m-2 lg:m-6 text-left max-w-[500px] 2xl:max-w-[624px] bg-white rounded-lg hover:shadow-custom transform duration-300"
        :key="index"
    >
      <img :src="'/bathrooms/' + item.image" :alt="`bathroom ` + index">
      <div class="border-[1px] border-[#E6E8EC] border-t-0 rounded-b-lg p-[32px]">
        <h4 class="mb-[8px] text-xl">{{item.title}}</h4>
        <button class="text-[#7534FF]" @click="isOpen = true">Дізнатись вартість <Icon name="material-symbols:arrow-forward" size="20px"/></button>
      </div>
    </div>
  </div>

  <UModal v-model="isOpen">
    <Modal />
  </UModal>

  <Footer/>

</template>