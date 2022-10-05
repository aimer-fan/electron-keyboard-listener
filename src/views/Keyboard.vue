<script lang="ts" setup>
import { onMounted } from 'vue';
import { IGlobalKeyEvent } from 'node-global-key-listener';
import LoffeeKeyboard from './keyboardLayouts/LoffeeKeyboard.vue';
import emitter from './mitt';
import { IpcKeyboardEvent, StorageKeyboardType } from '../constant';
import MacOSKeyboard from './keyboardLayouts/MacOSKeyboard.vue'
import { useStorage } from '@vueuse/core';

const type = useStorage(StorageKeyboardType, 'Default')

onMounted(() => {
  window.ElectronAPI.handleIpcKeyboardEvent((e: Electron.IpcRendererEvent, data: IGlobalKeyEvent) => {
    emitter.emit(IpcKeyboardEvent, data)
  })
})
</script>

<template>
  <div class="h-full flex flex-col">
    <el-radio-group v-model="type" class="mb-2" size="large">
      <el-radio-button label="Default" />
      <el-radio-button label="Loffee" />
    </el-radio-group>
    <div class="flex-1 flex justify-center items-center">
      <MacOSKeyboard v-if="type === 'Default'" />
      <LoffeeKeyboard v-if="type === 'Loffee'" />
    </div>
  </div>
</template>
