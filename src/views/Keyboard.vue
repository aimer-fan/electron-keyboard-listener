<script lang="ts" setup>
import { useStorage } from '@vueuse/core';
import Electron from 'electron';
import { IGlobalKeyEvent } from 'node-global-key-listener';
import { onMounted } from 'vue';
import { IpcKeyboardEvent, StorageKeyboardType } from '../constant';
import LoffeeKeyboard from './keyboardLayouts/LoffeeKeyboard.vue';
import MacOSKeyboard from './keyboardLayouts/MacOSKeyboard.vue';
import emitter from './mitt';

const type = useStorage(StorageKeyboardType, 'Default');

onMounted(() => {
  window.ElectronAPI.handleIpcKeyboardEvent((e: Electron.IpcRendererEvent, data: IGlobalKeyEvent) => {
    emitter.emit(IpcKeyboardEvent, data);
  });
});
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
