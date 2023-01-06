<template>
  <nav
    class="bg-white px-2 sm:px-4 py-2.5 rounded h-[100px] fixed top-0 right-0 left-0 z-[99] shadow-[0_5px_10px_rgba(0,0,0,0.05)]"
  >
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="https://biglight.jp/" class="flex items-center">
        <img
          src="/img/biglight-logo-light.svg"
          class="w-[75px] h-[75px]"
          alt="Biglight logo"
        />
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white"
        >
          <li>
            <a
              href="https://biglight.jp/"
              class="block text-[18px] font-semibold py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ffa500] md:p-0"
              >Trang chủ</a
            >
          </li>
          <li>
            <a
              href="https://biglight.jp/recruit"
              class="block text-[18px] font-semibold py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ffa500] md:p-0"
              >Tin tuyển dụng</a
            >
          </li>
          <li>
            <a
              href="/"
              aria-current="page"
              class="block text-[18px] font-semibold py-2 pl-3 pr-4 text-[#ffa500] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ffa500] md:p-0"
              >Blog Tin tức</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>
