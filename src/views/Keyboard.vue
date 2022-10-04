<script lang="ts" setup>
import KeyboardItem from './KeyboardItem.vue';
import { defaultKeyboardData } from '../constant'
import { onMounted } from 'vue';
import { IGlobalKeyEvent } from 'node-global-key-listener';
import { computed, ref } from 'vue';

const keyboardData = ref(defaultKeyboardData)

const flatKeyboardData = computed(() => keyboardData.value.flat(1))

onMounted(() => {
  window.ElectronAPI.handleIpcKeyboardEvent((e: Electron.IpcRendererEvent, data: IGlobalKeyEvent) => {
    const target = flatKeyboardData.value.find(item => item.id === data.name)
    if (target) {
      target.active = data.state === "DOWN"
    }
  })
})
</script>

<template>
  <div style="width: 900px;">
    <el-card>
      <div class="flex justify-between mb-2 last:mb-0" v-for="(row, index) in keyboardData" :key="index">
        <KeyboardItem
          v-for="k in row"
          :key="k.id"
          :id="k.id"
          :content="k.name"
          :active="k.active"
          :width="k.width"
        />
      </div>
    </el-card>
  </div>
</template>
