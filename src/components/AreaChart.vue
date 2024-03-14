<script setup lang="ts">
import ApexCharts from "apexcharts";

let options = {
  // X axis labels
  xaxis: {
    type: "date",
    categories: [],
  },
  tooltip: {
    x: {
      format: false,
    },
  },
};
let series = [
  {
    name: "total",
    data: [0, 2, 1],
  },
];
</script>

<template>
  <div>
    <apexchart 
      width="500"
      heigth="50"
      type="area"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<style scoped>
</style>
