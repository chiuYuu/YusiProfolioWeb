<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const sections = ref(null);
    let curPage =   ref(-1);
    let scrollLock = false;
    const goTopBtn = ref(false); // 控制回到頂部的按鈕

    const scrollPage = () => {
      document.addEventListener("wheel", (e) => {
        if (scrollLock) return;
        if (e.deltaY < 0) navigateUp();
        else navigateDown();
      });

      document.addEventListener("keydown", (e) => {
        if (scrollLock) return;
        if (e.key === "ArrowUp") navigateUp();
        else if (e.key === "ArrowDown") navigateDown();
      });

      window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        goTopBtn.value = scrollY > 500;
      });
    };

    const pagination = () => {
      scrollLock = true;
      const targetSection = sections.value[curPage.value];
      targetSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        scrollLock = false;
      }, 500);
    };

    const navigateUp = () => {
      if (curPage.value === 0) return;
      curPage.value--;
      pagination();
    };

    const navigateDown = () => {
      if (curPage.value === sections.value.length - 1) return;
      curPage.value++;
      pagination();
    };

    const goTop = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      curPage.value = -1; // 重製curPage
    }

    onMounted(() => {
      sections.value = document.querySelectorAll("section");
      scrollPage();
    });

    return {
      goTop,
      goTopBtn
    };
  },
};
</script>

<template>

  <section class="flex flex-col items-center">
    <button @click="goTop" v-if="goTopBtn" class="text-white go-top bg-[#876e6e6c] px-3 py-2 rounded-[50%]"> ↑ </button>

    <h1 class="text-2xl sm:text-3xl lg:text-4xl middle">
      Hi, this is Yusi's web link
      <span class="text-lg">Please scroll down or use the down arrow key</span>
    </h1>
  </section>

  <section class="flex flex-col items-center">
    <h1 class="text-xl sm:text-2xl lg:text-3xl">
      1
      <span># 以 Vue 進行開發</span>
    </h1>

    <a href="http://nchu-11305-taichungairport.dev-hub.io/" target="_blank"
      class="flex justify-center flex-col mx-10 px-10 py-6 lg:px-20 box mb-10 middle">
      <span class="text-2xl sm:text-4xl lg:text-5xl py-5">
        臺中國際機場
      </span>
      <span class="text-base sm:text-xl lg:text-3xl opacity-60 pb-5">
        Taichung International Airport
      </span>
    </a>

    <span class="span-down">
      為產業新尖兵課程合作專題，與逢甲前端班合作完成
      <br>
      主要負責後臺畫面開發、航班資訊RWD 以及服務設施CRUD和資料串接
      <br>
      以Laravel + Vue 進行開發
    </span>
  </section>

  <section class="flex flex-col items-center">
    <a href="https://chiuyuu.github.io/clock-vue/" target="_blank"
      class="flex justify-center flex-col mx-10 px-10 py-6 lg:px-20 box mb-10 middle">
      <span class="text-2xl sm:text-4xl lg:text-5xl py-5">
        時區時鐘
      </span>
      <span class="text-base sm:text-xl lg:text-3xl opacity-60 pb-5">
        Time Zone Clock
      </span>
    </a>

    <span class="span-down">
      挑選亞洲、歐洲、美洲其各四個國家
      <br>
      進行時間的對照與呈現
    </span>
  </section>

  <section class="flex flex-col items-center">
    <a href="https://chiuyuu.github.io/todolist/" target="_blank"
      class="flex justify-center flex-col mx-10 px-10 py-6 lg:px-20 box middle">
      <span class="text-2xl sm:text-4xl lg:text-5xl py-5">
        待辦清單
      </span>
      <span class="text-base sm:text-xl lg:text-3xl opacity-60 pb-5">
        To Do List
      </span>
    </a>

    <span class="span-down">
      製作一個待辦清單，以進行新增、刪除、編輯
      <br>
      並將其清單暫存於localStorage中
    </span>
  </section>

  <section class="flex flex-col items-center">
    <a href="https://chiuyuu.github.io/calculator/" target="_blank"
      class="flex justify-center flex-col mx-10 px-10 py-6 lg:px-20 box middle">
      <span class="text-2xl sm:text-4xl lg:text-5xl py-5">
        簡易計算機
      </span>
      <span class="text-base sm:text-xl lg:text-3xl opacity-60 pb-5">
        Calculator
      </span>
    </a>

    <span class="span-down">
      進行簡易的加減乘除計算，可顯示10筆資訊並存入localStorage 中
      <br>
      當計算第11筆資料後，則清除最舊的資料
    </span>
  </section>

  <section class="flex flex-col items-center">
    <h1 class="text-2xl sm:text-3xl lg:text-4xl">
      2
      <span># 串接api 進行資料呈現</span>
    </h1>

    <a href="https://chiuyuu.github.io/WeatherCards/" target="_blank"
      class="flex justify-center flex-col mx-10 px-10 py-6 lg:px-20 box mb-10 middle">
      <span class="text-2xl sm:text-4xl lg:text-5xl py-5">
        天氣小卡
      </span>
      <span class="text-base sm:text-xl lg:text-3xl opacity-60 pb-5">
        Weather Cards
      </span>
    </a>

    <span class="span-down">
      進行氣象局天氣預報的資料串接
      <br>
      可篩選臺灣北中南東各縣市的天氣小卡
    </span>
  </section>

  <section class="flex flex-col items-center">
    <a href="https://chiuyuu.github.io/Pokemon-Search/" target="_blank"
      class="flex justify-center flex-col mx-10 px-10 py-6 lg:px-20 box middle">
      <span class="text-2xl sm:text-4xl lg:text-5xl py-5">
        寶可夢查詢
      </span>
      <span class="text-base sm:text-xl lg:text-3xl opacity-60 pb-5">
        Pokemon Search
      </span>
    </a>

    <span class="span-down">
      串接寶可夢api，以供查詢寶可夢資訊
      <br>
      並呈現對應的圖片、GIF圖檔、編號與英文名稱
    </span>
  </section>

  <section class="flex flex-col items-center">
    <h1 class="text-2xl sm:text-3xl lg:text-4xl">
      3
      <span># 簡易網頁遊戲</span>
    </h1>

    <a href="https://chiuyuu.github.io/Color-Differentiation/" target="_blank"
      class="flex justify-center flex-col mx-10 px-10 py-6 lg:px-20 box middle">
      <span class="text-2xl sm:text-4xl lg:text-5xl py-5">
        色辨遊戲
      </span>
      <span class="text-base sm:text-xl lg:text-3xl opacity-60 pb-5">
        Color Differentiation
      </span>
    </a>

    <span class="span-down">
      簡易往頁色辨遊戲
      <br>
      提供初階、進階與限時三種遊戲模式
    </span>
  </section>

  <section class="flex flex-col items-center">
    <h1 class="text-xl sm:text-2xl lg:text-3xl">
      4
      <span># RWD 網頁切版臨摹</span>
    </h1>

    <a href="https://chiuyuu.github.io/Microsoft2-Web-swiper/" target="_blank"
      class="flex justify-center flex-col mx-10 px-10 py-6 lg:px-20 box middle">
      <span class="text-2xl sm:text-4xl lg:text-5xl py-5">
        Microsoft 首頁切版 RWD
      </span>
      <span class="text-base sm:text-xl lg:text-3xl opacity-60 pb-5">
        Microsoft Web RWD
      </span>
    </a>

    <span class="span-down">
      Microsoft 微軟首頁切版臨摹
      <br>
      用原生CSS 進行RWD 編寫
    </span>
  </section>

</template>

<style scoped></style>
