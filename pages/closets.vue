<script setup>

const closets = [
  {images: ["ObolonSky/1.png", "ObolonSky/2.png", "ObolonSky/3.png"], title: "Obolon Sky"},
  {images: ["ParkLand/1.png", "ParkLand/2.png", "ParkLand/3.png"], title: "ЖК Парк Ленд"},
  {images: ["Sofia/1.png", "Sofia/2.png"], title: "ЖК Софія"},
  {images: ["GrandBourget/1.png", "GrandBourget/1.png"], title: "ЖК Гранд Бурже"},
  {images: ["Brovary/1.png", "Brovary/2.png"], title: "ЖК у Броварах"},
  {images: ["Victories/1.png", "Victories/2.png"], title: "пр-кт Перемоги"},
  {images: ["GoldenGate/1.png", "GoldenGate/2.png"], title: "Золоті ворота"},
  {images: ["KPI/1.png", "KPI/2.png"], title: "КПІ"},
  {images: ["Belogorodka/1.png", "Belogorodka/2.png"], title: "Білогородка приватний будинок"},
  {images: ["Kharkiv/1.png", "Kharkiv/2.png", "Kharkiv/3.png", "Kharkiv/4.png"], title: "ЖК Харківський"},
];

const isOpen = ref(false);

</script>

<template>
  <div class="flex justify-center">
    <div class="flex flex-col p-0 mx-2 my-4 text-left w-[1000px] 2xl:w-[1248px]">
      <h3 class="text-4xl font-bold mb-2">Шафи</h3>
      <p class="text-[#42526B]">
        Повісити пальто на відстані витягнутої руки, заходячи до квартири – це<br />
        успіх! Адже купити шафу-купе в Києві можна, але набагато краще<br />
        виготовити меблі в передпокій на замовлення.
      </p>
    </div>
  </div>

  <div class="flex flex-wrap justify-center">
    <div
        v-for="(item, index) in closets"
        :key="index"
        class="m-2 lg:m-6 text-left max-w-[500px] 2xl:max-w-[624px] bg-white rounded-lg hover:shadow-custom transform duration-300"
    >
      <Swiper
          :slides-per-vie="1"
          :loop="true"
          :pagination="{
            clickable: true,
          }"
          :modules="[SwiperPagination]"
      >
        <SwiperSlide
            v-for="(image, imageIndex) in item.images"
            :key="imageIndex"
        >
          <img
              :src="'/closets/' + image"
              :alt="`closet ` + index + ' - ' + imageIndex"
          />
        </SwiperSlide>
      </Swiper>
      <div class="border-[1px] border-[#E6E8EC] border-t-0 rounded-b-lg p-[32px]">
        <h4 class="mb-[8px] text-xl">{{ item.title }}</h4>
        <button class="text-[#7534FF]" @click="isOpen = true">
          Дізнатись вартість
          <Icon name="material-symbols:arrow-forward" size="20px" />
        </button>
      </div>
    </div>
  </div>

  <UModal v-model="isOpen">
    <Modal />
  </UModal>

  <Footer />
</template>

<style>
  :root{
    --swiper-theme-color:#7534FF;
  }

  .swiper {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 550px) {
    .swiper {
      max-width: 360px;
    }
  }

</style>