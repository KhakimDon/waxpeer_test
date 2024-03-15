<script setup lang="ts">
import "./index.css";
import BlocksItem from "./components/BlocksItem.vue";
import SphereAnimation from "./components/SphereAnimation.vue";
// import AreaChart from "./components/AreaChart.vue"; //график
import "./assets/adaptation.css";

import { AbilityBuilder } from "@casl/ability";
import ability from './services/ability'

import { useStore } from "./stores/info";
import { ref } from "vue";

const store = useStore();

// GET LIVE HOURS
let time = ref(
  `${new Date().getHours().toString().padStart(2, 0)}:${new Date()
    .getMinutes()
    .toString()
    .padStart(2, 0)}:${new Date().getSeconds().toString().padStart(2, 0)}`
);
let interval = setInterval(() => {
  time.value = `${new Date().getHours().toString().padStart(2, 0)}:${new Date()
    .getMinutes()
    .toString()
    .padStart(2, 0)}:${new Date().getSeconds().toString().padStart(2, 0)}`;
}, 1000);





let updateAbility = (user) => {
  const { can, rules } = new AbilityBuilder()

  if (user.rank === "admin") {
    can("read", "all");
  } else {
    // cannot('read', 'all', { 'index': { $lt: 5 } })
    can('read', 'user')
  }

  ability.update(rules);
 
}

updateAbility(store.currentUser)




if(!ability.can("read", "all")){
  let filtered = store.info.filter(item => !item.status)
  store.info = filtered
}






// updateAbility({ userId: 1, rank: 'user' })

// console.log(ability);



</script>

<template>
  <div
    id="layout"
    class="mx-auto p-[40px] pt-[32px] bg-[#1A1A1A] h-[100vh] max-h-[1048px] w-[100%] overflow-y-scroll"
  >
    <header class="max-w-[1920px] mx-auto">
      <img class="w-[153px]" src="@/assets/waxpeer.png" alt="" />
    </header>
    <main
      id="container"
      class="w-[100%] grid grid-adaptation grid-cols-4 gap-[20px] grid-rows-4 mt-[67px] max-w-[1920px] mx-auto"
    >
      <div
        class="top-block col-start-2 flex justify-between px-[62px] pt-[26px] rounded-[8px] col-span-2 row-span-1 row-start-1"
      >
        <div>
          <span
            class="top-block-title font-[Poppins] mb-[14px] font-[500] text-[16px] text-white flex items-center h-[32px] block"
            >Waxpeer online & status</span
          >
          <div
            class="flex mt-[37px] top-block-wrapper [&>*:nth-child(2)]:px-[47px] [&>*:nth-child(2)]:mx-[50px] [&>*:nth-child(2)]:border-x-[1px] [&>*:nth-child(2)]:border-[#333333]"
          >
            <div
              v-for="(item, index) in store.waxpeer_status.status"
              :key="item.id"
              class="h-[67px] cont flex flex-col"
            >
              <span
                class="text-[30px] nums font-[Poppins] font-[500] bg-gradient-to-b from-[#CFCFCF] to-[#CFCFCF60] bg-clip-text text-[transparent]"
                >{{ item }}</span
              >
              <span
                class="text-[14px] titles font-[400] font-[Poppins] text-[#57575A]"
                >{{ index }}</span
              >
            </div>
          </div>
        </div>
        <div
          class="h-[100%] sphere-container cursor-pointer flex-1 relative flex items-center justify-end"
        >
          <sphere-animation />
          <div
            class="h-[163px] anim text-[30px] relative font-[Poppins] text-[#20CE70] font-[400] flex items-center justify-center w-[163px] bg-[#20CE7030] rounded-[50%]"
          >
            Stable
            <div></div>
          </div>
        </div>
      </div>
      <BlocksItem
        class="hover:scale-[0.97] hover:bg-[#181818] cursor-pointer duration-[.3s]"
        v-for="item of store.info"
        :key="item.id"
      >
        <div
          class="h-[32px] w-[32px] flex items-center justify-center bg-[#262626] rounded-[50%]"
        >
          <img
            class="h-[14px] w-[14px]"
            src="./assets/blockIcons/uptime.svg"
            alt="icon"
          />
        </div>
        <div class="pl-[13px] m390 w-[100%]">
          <span
            class="font-[Poppins] mb-[14px] font-[500] text-[16px] text-white flex items-center h-[32px] block"
          >
            {{ item.title }}
          </span>
          <span class="font-[Poppins] font-[400] text-[14px] text-[#6E6E72]">
            {{ item.subtitle }}
          </span>
          <div class="flex mt-[30px] items-center justify-between">
            <div class="w-[max-content]">
              <p
                class="text-[30px] font-[500] bg-gradient-to-b from-[#CFCFCF] to-[#CFCFCF60] bg-clip-text text-[transparent]"
              >
                {{ item.bottom[0] }}
              </p>
            </div>
            <div class="w-[max-content]">
              <span
                class="font-[400] font-[Poppins] text-[20px] text-[#BABAC250]"
                v-if="item._id == 2"
                >{{ time }}</span
              >
              <div v-if="item._id == 3" class="flex gap-[15px] icons-crypto">
                <div
                  class="h-[46px] flex items-center justify-center w-[46px] rounded-[50%]"
                >
                  <img src="./assets/teather.svg" alt="" />
                </div>
                <div
                  class="h-[46px] flex items-center justify-center w-[46px] rounded-[50%]"
                >
                  <img src="./assets/teather2.svg" alt="" />
                </div>
                <div
                  class="h-[46px] flex items-center justify-center w-[46px] rounded-[50%]"
                >
                  <img src="./assets/teather3.svg" alt="" />
                </div>
              </div>

              <p
                v-if="item.status"
                :style="`color: ${item.color}`"
                class="textm390 text-[30px] font-[Poppins] font-[400]"
              >
                {{ item.status }}
              </p>
              <p
                v-if="item.bottom[1] != 'GRAPH'"
                class="textm390 text-[30px] font-[Poppins] font-[500] bg-gradient-to-b from-[#CFCFCF] to-[#CFCFCF60] bg-clip-text text-[transparent]"
              >
                {{ item.bottom[1] }}
              </p>
              <img
                v-if="item.bottom[1] == 'GRAPH'"
                class="w-[171px] h-[55px]"
                src="./assets/va.png"
                alt=""
              />
              <!-- График с использованием сторонней библиотеки. можно запустить код -->
              <!-- <AreaChart  v-if="item.bottom[1] == 'GRAPH'" /> -->
            </div>
          </div>
        </div>
      </BlocksItem>
    </main>
  </div>
</template>

<style>
body {
  background: #1a1a1a;
}
::-webkit-scrollbar {
  width: 0px;
}
.anim div {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* background: #20CE7030; */
  background: transparent;
  box-sizing: content-box;
  border: 0px solid #20ce7114;
  animation-name: sphereWaves;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  border-radius: 50%;
}
@keyframes sphereWaves {
  0% {
    border: 0px solid #20ce7114;
  }
  100% {
    border: 20px solid #20ce7114;
    border: 20px solid #20ce7100;
  }
}
</style>
