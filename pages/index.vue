<template>
  <div
    class="mt-[100px] container mx-auto p-[50px] grid grid-cols-[1fr] md:grid-cols-[1fr_350px] gap-8"
  >
    <div class="">
      <BlogItem />
      <Pagination
        class="mt-10"
        :current-page="currentPage"
        :total-page="5"
        @update="handleChangePage"
      />
    </div>
    <SideRight />
  </div>
</template>

<script setup lang="ts">
const data = ref();

const currentPage = ref(1);
const totalPage = ref(5);

const getData = async () => {
  data.value = await $fetch("https://atdecorluxury.com/api/posts", {
    params: { page: 1, per_page: 10 },
  });
  console.log("data", data.value.data);
};

const handleChangePage = (e: number) => {
  console.log(e);
  currentPage.value = e;
};

onMounted(async () => {
  await getData();
});
</script>

<style scoped></style>
