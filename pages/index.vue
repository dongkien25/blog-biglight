<template>
  <div
    class="mt-[100px] container mx-auto p-[50px] grid grid-cols-[1fr] md:grid-cols-[1fr_350px] gap-8"
  >
    <div class="" v-if="loading">
      <PlaceholderImage />
      <PlaceholderImage class="mt-10" />
    </div>
    <div v-else class="">
      <div class="">
        <BlogItem
          class="post-item"
          v-for="(post, index) in posts"
          :post="post"
          :key="index"
        />
      </div>
      <Pagination
        class="mt-10"
        :current-page="currentPage"
        :total-page="totalPage"
        @update="handleChangePage"
      />
    </div>
    <SideRight v-if="!loading" :posts="posts" />
  </div>
  <ModalLoading v-show="loading" />
</template>

<script setup lang="ts">
const posts = ref();

const currentPage = ref(1);
const totalPage = ref(5);
const loading = ref(true);

type ResponseData = {
  currentPage: number;
  data: [];
  total: number;
};

const getData = async () => {
  loading.value = true;
  const response: ResponseData = await $fetch(
    "https://atdecorluxury.com/api/posts",
    {
      params: { page: 1, per_page: 10 },
    }
  );
  loading.value = false;
  console.log(response);
  if (response) {
    posts.value = response.data;
    const total = response.total;
    totalPage.value = Math.ceil(total / 5);
  }
};

const handleChangePage = (e: number) => {
  console.log(e);
  currentPage.value = e;
};

onMounted(async () => {
  await getData();
});
</script>

<style scoped>
.post-item {
  margin-top: 60px;
}
.post-item:first-child {
  margin-top: 0px;
}
</style>
