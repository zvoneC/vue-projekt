<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const chartData = {
  labels: ['P', 'U', 'S', 'Č', 'P', 'S', 'N'],
  datasets: [{ label: 'Posjete', data: [12, 19, 7, 10, 16, 9, 4] }]
}
const chartOptions = { responsive: true, maintainAspectRatio: false }
</script>
<template>
  <div style="height:300px">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>