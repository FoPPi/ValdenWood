<script setup>

  const menuItems = [
    { name: "Головна", link: "/" },
    { name: "Кухнi", link: "/kitchens" },
    { name: "Шафи", link: "/closets" },
    { name: "Ванні кiмнати", link: "/bathrooms" },
    { name: "Про нас", link: "/about" },
  ];

  const isActive = (path) => {
    const route = useRoute();
    return {
      color: route.path === path ? "#7534FF" : "",
    };
  };

  const isOpenContact = ref(false);

  const isOpenSlideover = ref(false);

</script>

<template>
  <header class="flex justify-center z-20">
    <div class="flex bg-white flex-row items-center justify-between p-4 w-[1400px] mx-3 lg:mx-10 my-10 max-w-[1400px] rounded-2xl shadow-custom relative">
      <NuxtLink to="/">
        <img src="/logo.svg" alt="logo"/>
      </NuxtLink>
      <ul class="hidden lg:flex text-[#838E9E] flex-row p-4 space-x-5 xl:space-x-10">
        <li v-for="(item, index) in menuItems" :key="index">
          <NuxtLink
              :to="item.link"
              :style="isActive(item.link)"
              class="hover:text-[#7534FF] transform duration-300"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
      <button class="hidden lg:block py-4 px-10 rounded-lg text-white font-bold bg-[#7534FF] hover:bg-[#5d2ac3] transform duration-300" @click="isOpenContact = true">Написати нам</button>
      <div class="block lg:hidden">
        <Icon name="ic:round-menu" @click="isOpenSlideover = true" size="48px" />
      </div>
    </div>
  </header>

  <UModal v-model="isOpenContact">
    <Modal />
  </UModal>


  <USlideover v-model="isOpenSlideover" prevent-close>
    <UCard class="flex flex-col flex-1" :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            Меню
          </h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpenSlideover = false" />
        </div>
      </template>
      <ul class="flex text-2xl text-center text-[#838E9E] flex-col p-4 space-y-12">
        <li v-for="(item, index) in menuItems" :key="index">
          <NuxtLink
              :to="item.link"
              :style="isActive(item.link)"
              class="hover:text-[#7534FF] transform duration-300"
              @click="isOpenSlideover = false"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
      <div class="flex items-center justify-center mt-12">
        <button class="py-4 px-10 rounded-lg text-white text-2xl font-bold bg-[#7534FF] hover:bg-[#5d2ac3] transform duration-300" @click="isOpenContact = true">Написати нам</button>
      </div>
    </UCard>
  </USlideover>
</template>

<style>
</style>