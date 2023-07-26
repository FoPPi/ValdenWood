<script setup>
useSeoMeta({
  title: 'Valden wood',
  description: 'Майстерня меблів на замовлення Valden Wood. Виробимо для вас меблі преміум-класу у Києві та області під ключ',
  ogTitle: 'Valden wood',
  ogDescription: 'Майстерня меблів на замовлення Valden Wood. Виробимо для вас меблі преміум-класу у Києві та області під ключ',
  ogImage: 'Valden wood',
  ogUrl: 'https://www.valden-wood.com',
  twitterTitle: 'Valden wood',
  twitterDescription: 'Майстерня меблів на замовлення Valden Wood. Виробимо для вас меблі преміум-класу у Києві та області під ключ',
  twitterImage: '/logo.svg',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'uk'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico'
    }
  ]
})
</script>

<template>
  <Header/>
  <NuxtPage />
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');

  body{
    font-family: "Lexend", sans-serif;
  }
</style>