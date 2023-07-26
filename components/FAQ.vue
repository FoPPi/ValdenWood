<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: '1. Замір усіх стін та комунікацій',
          answer: 'Для обмірювання всіх стін та комунікацій для створення макета меблів',
          expanded: false,
        },
        {
          question: '2. Створення макету проекту',
          answer: 'Наш конструктор розробляє макет меблів для узгодження',
          expanded: false,
        },
        {
          question: '3. Узгодження проекту - підписання договору',
          answer: 'Узгодження макета з вибором матеріалів і підбором фурнітури',
          expanded: false,
        },
        {
          question: '4. Доставка та встановлення на об\'єкті у Замовника',
          answer: 'У точно обумовлені терміни',
          expanded: false,
        },
      ],
    };
  },
  methods: {
    toggleAccordion(faq) {
      this.faqs.forEach((item) => {
        if (item === faq) {
          item.expanded = !item.expanded;
        } else {
          item.expanded = false;
        }
      });
    },
  },
};
</script>

<template>
  <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Як мы працюємо?</h2>
        <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Знизу ви можете побачити послідовність дій, які відбуваються при роботі з нами</p>
      </div>

      <div class="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
        <div v-for="faq in faqs" :key="faq.question" class="transition-all rounded-xl duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
          <button type="button" @click="toggleAccordion(faq)" class="flex items-center justify-between w-full px-4 py-5 sm:p-6">
            <span class="flex text-lg font-semibold text-black">{{ faq.question }}</span>
            <svg :class="{'rotate-180': faq.expanded}" class="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div v-if="faq.expanded" class="px-4 pb-5 sm:px-6 sm:pb-6">
            <p v-html="faq.answer"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.rotate-180 {
  transform: rotate(180deg);
}
</style>