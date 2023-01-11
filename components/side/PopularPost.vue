<template>
  <div
    class="sidebar bg-white rounded-sm shadow-[0_3px_12px_-1px_rgb(7,10,25,10%),0_2px_27px_-30px_rgb(7,10,25,10%)] md:p-[15px_30px] h-[300px]"
  >
    <div class="widget-title">
      <h3 class="title">Popular Posts</h3>
    </div>
    <div class="widget-content">
      <SidePopularItem></SidePopularItem>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.sidebar .widget-content {
  float: left;
  width: 100%;
  margin: 0;
}
</style>
