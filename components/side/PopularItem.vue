<template>
  <div class="post-content">
    <a href="" class="post-image-link">
      <img src="/img/facebook.png" class="post-thumb max-w-[100%]" alt="" />
    </a>
    <div class="post-info overflow-hidden">
      <h2 class="post-title">
        <a
          href="https://musa-way2themes.blogspot.com/2018/05/old-unsatiable-our-now-considered.html"
          >Old unsatiable our now considered travelling
        </a>
      </h2>
      <div class="post-meta">
        <span class="post-date published" datetime="2022-08-27T19:30:00-07:00"
          >August 27, 2022</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.post-image-link {
  position: relative;
  width: 80px;
  height: 60px;
  float: left;
  overflow: hidden;
  display: block;
  vertical-align: middle;
  margin: 0 12px 0 0;
  border-radius: 4px;
}
.post-thumb {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  transition: opacity 0.17s ease, transform 0.17s ease;
}
.post-title {
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5em;
  margin: 0 0 3px;
}
.post-title a {
  display: block;
  color: #454360;
  transition: color 0.17s;
}
.post-meta {
  overflow: hidden;
  color: #aaa;
  font-size: 13px;
  font-weight: 400;
  padding: 0 1px;
}
.post-meta .post-author,
.post-meta .post-date {
  float: left;
  display: inline-block;
  margin: 0;
}
.post-meta {
  overflow: hidden;
  color: #aaa;
  font-size: 13px;
  font-weight: 400;
  padding: 0 1px;
}
</style>
