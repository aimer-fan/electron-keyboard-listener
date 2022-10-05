<script lang="ts" setup>
import { IpcKeyboardEvent } from '../constant';
import { onMounted, ref } from 'vue';
import emitter from './mitt';

const props = defineProps<{
  id: string,
  content: string,
  customStyle?: object,
}>()

const active = ref(false)

onMounted(() => {
  emitter.on(IpcKeyboardEvent, (data) => {
    if (data.name === props.id) {
      active.value = data.state === 'DOWN'
    }
  })
})
</script>

<template>
  <el-card class="keyboard-item w-12 h-12 flex justify-center items-center" :class="{active}" :style="customStyle">
    {{ props.content }}
  </el-card>
</template>

<style scoped>
.keyboard-item :deep(.el-card__body) { padding: 0 }
.active {
  background-color: var(--el-color-primary);
}
</style>