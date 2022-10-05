<script lang="ts" setup>
import * as echarts from 'echarts'
import { InputNumberEmits } from 'element-plus';
import { GlobalKeyboardListener, IGlobalKeyEvent } from 'node-global-key-listener';
import { onMounted, ref, watch } from 'vue';
import { isDark } from './useDark'

let barChartInstance: echarts.ECharts = null
const barChartContainer = ref(null)
let rankList: { name: string, count: number }[] = []
const total = ref(0)

const getRankList = async (): Promise<{ name: string, count: number }[]> => {
  const data = await window.ElectronAPI.getRankList()
  total.value = data.total
  return data.list
}

const option = {
  backgroundColor: 'transparent',
  xAxis: {
    name: 'key',
    type: 'category',
    data: rankList.map(i => i.name),
    axisLabel: {
      interval: 0,
      width: 80,
      overflow: 'truncate'
    }
  },
  yAxis: {
    name: 'count',
    type: 'value'
  },
  series: [
    {
      data: rankList.map(i => i.count),
      type: 'bar',
      label: {
        show: true,
        position: 'top'
      }
    }
  ],
  tooltip: {
    show: true
  }
};

const renderBarChart = async (rankList: { name: string, count: number }[]) => {
  if (!barChartInstance) {
    barChartInstance = echarts.init(barChartContainer.value, isDark.value ? 'dark' : undefined)
  }
  option.xAxis.data = rankList.map(i => i.name)
  option.series[0].data = rankList.map(i => i.count)
  barChartInstance.setOption(option)
}

onMounted(async () => {
  const data = await getRankList()
  window.ElectronAPI.handleIpcKeyboardEvent(async (e: Electron.IpcRendererEvent, data: IGlobalKeyEvent) => {
    if (data.state === 'DOWN') {
      const data = await getRankList()
      renderBarChart(data)
    }
  })
  renderBarChart(data)
})

watch(isDark, async () => {
  if (barChartInstance) {
    barChartInstance.dispose()
    barChartInstance = null
  }
  const data = await getRankList()
  renderBarChart(data)
})
</script>

<template>
  <div class="h-full flex justify-center items-center">
    <div class="flex flex-col justify-center items-end">
      <div class="mr-20">total: {{ total }}</div>
      <div ref="barChartContainer" style="width: 900px;height: 314px;">
        Rank
      </div>
    </div>
  </div>
</template>
