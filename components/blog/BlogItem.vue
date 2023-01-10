<template>
  <div
    class="bg-white rounded-sm shadow-[0_3px_12px_-1px_rgb(7,10,25,10%),0_2px_27px_-30px_rgb(7,10,25,10%)] dark:bg-gray-800 dark:border-gray-700 md:p-[45px_50px] relative"
  >
    <div class="flex">
      <a href="#">
        <img
          class="rounded-t-lg min-w-[120px] max-w-[120px]"
          src="/img/news-1.png"
          alt=""
        />
      </a>
      <div class="ml-6">
        <p
          class="mb-2 text-3xl font-bold tracking-tight text-[#454360]"
          style="
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          "
        >
          Noteworthy technology acquisitions 2021 Noteworthy technology
          acquisitions 2021Noteworthy technology acquisitions 2021Noteworthy
          technology acquisitions 2021Noteworthy technology acquisitions
          2021Noteworthy technology acquisitions 2021Noteworthy technology
          acquisitions 2021
        </p>
      </div>
    </div>

    <div class="py-5">
      <p class="mb-3 font-normal text-gray-700">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </div>
    <div class="flex justify-center post-tag-meta">
      <a href="" class="post-tag"> Idea </a>
    </div>
    <a
      href="#"
      class="absolute left-[50%] bottom-[-20px] translate-x-[-50%] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white read-more"
    >
      Read more
      <svg
        aria-hidden="true"
        class="w-4 h-4 ml-2 -mr-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.read-more {
  background-color: #0d6efd;
  padding: 0 30px;
  height: 45px;
  transition: background 0.17s ease;
  -webkit-box-shadow: 0px 3px 5px -1px rgb(7 10 25 / 20%);
  box-shadow: 0px 3px 5px -1px rgba (7, 10, 25, 0.2);
}
.read-more::after {
  content: "";
  border: 2px solid #fff;
  position: absolute;
  left: 4px;
  top: 4px;
  right: 4px;
  bottom: 4px;
  z-index: 5;
  transition: all 0.2s ease;
}
.read-more:hover {
  background-color: #ffa500;
}
.read-more:hover::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.2s ease;
}
.post-tag-meta a.post-tag {
  position: static;
  display: flex;
  color: #4b4870;
  box-sizing: border-box;
  -webkit-box-shadow: 0px 2px 6px rgb(75 72 112 / 15%);
  box-shadow: 0px 2px 6px rgb(75 72 112 / 15%);
  padding: 6px 8px 4px;
  line-height: 1.2;
  height: auto;
  margin-right: 10px;
  background: #fff;
  font-weight: 500;
  font-size: 14px;
  /* font-family: "Josefin Sans", sans-serif; */
  text-transform: capitalize;
}
.post-tag {
  position: absolute;
  top: 15px;
  left: 15px;
  height: 20px;
  z-index: 5;
  background-color: #ff4c60;
  color: #fff;
  font-size: 10px;
  line-height: 20px;
  font-weight: 700;
  text-transform: capitalize;
  padding: 0 7px;
  border-radius: 2px;
}
.post-tag-meta a.post-tag:before {
  content: "#";
  color: #3f8cff;
  margin-right: 3px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
</style>
